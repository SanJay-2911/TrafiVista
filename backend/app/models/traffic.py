from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.db.session import Base

class TrafficRecord(Base):
    __tablename__ = "traffic_records"

    id = Column(Integer, primary_key=True, index=True)
    state = Column(String, nullable=False)
    district = Column(String, nullable=False)
    city = Column(String, nullable=False)
    spot = Column(String, nullable=False)
    vehicle_count = Column(Integer)
    average_speed = Column(Float)
    congestion_level = Column(String)  # High, Medium, Low
    confidence = Column(Float)         # ML model confidence (0.0 - 1.0)
    timestamp = Column(DateTime(timezone=True), nullable=False)
    uploaded_by_id = Column(Integer, ForeignKey("user.id"))
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    uploaded_by = relationship("User")
