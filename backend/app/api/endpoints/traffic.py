from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.db.session import get_db
from app.api import deps
from app.models.user import User
from app.models.traffic import TrafficRecord
from app.schemas.traffic import TrafficRecordCreate, TrafficRecord as TrafficSchema, PredictionRequest, PredictionResponse
from app.ml.model import model

router = APIRouter()

@router.post("/predict", response_model=PredictionResponse)
def predict_traffic(
    request: PredictionRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    congestion, confidence = model.predict(request.timestamp, request.spot)

    # Save prediction to database so history and overview update
    record = TrafficRecord(
        state=request.state,
        district=request.district,
        city=request.city,
        spot=request.spot,
        timestamp=request.timestamp,
        congestion_level=congestion,
        confidence=confidence,
        uploaded_by_id=current_user.id
    )
    db.add(record)
    db.commit()

    return {"congestion_level": congestion, "confidence": confidence}

@router.post("/upload", response_model=TrafficSchema)
def upload_traffic_record(
    record_in: TrafficRecordCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    db_record = TrafficRecord(
        **record_in.model_dump(),
        uploaded_by_id=current_user.id
    )
    db.add(db_record)
    db.commit()
    db.refresh(db_record)
    return db_record

@router.get("/history", response_model=List[TrafficSchema])
def get_traffic_history(
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    if current_user.is_admin:
        return db.query(TrafficRecord).all()
    return db.query(TrafficRecord).filter(TrafficRecord.uploaded_by_id == current_user.id).all()

@router.delete("/record/{record_id}", status_code=204)
def delete_traffic_record(
    record_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(deps.get_current_user)
):
    record = db.query(TrafficRecord).filter(TrafficRecord.id == record_id).first()
    if not record:
        raise HTTPException(status_code=404, detail="Record not found")
    
    # Only allow owner or admin to delete
    if not current_user.is_admin and record.uploaded_by_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not authorized to delete this record")
        
    db.delete(record)
    db.commit()
    return None
