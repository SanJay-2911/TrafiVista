from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class TrafficRecordBase(BaseModel):
    state: str
    district: str
    city: str
    spot: str
    vehicle_count: Optional[int] = None
    average_speed: Optional[float] = None
    congestion_level: Optional[str] = None
    confidence: Optional[float] = None
    timestamp: datetime

class TrafficRecordCreate(TrafficRecordBase):
    pass

class TrafficRecord(TrafficRecordBase):
    id: int
    uploaded_by_id: int
    created_at: datetime

    class Config:
        from_attributes = True

class PredictionRequest(BaseModel):
    state: str
    district: str
    city: str
    spot: str
    timestamp: datetime

class PredictionResponse(BaseModel):
    congestion_level: str  # High, Medium, Low
    confidence: float
