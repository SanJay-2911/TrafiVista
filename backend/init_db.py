from app.db.session import engine, Base, SessionLocal
from app.models import user, traffic
from app.models.user import User
from app.core.security import get_password_hash

def init_db():
    print("Initializing database...")
    Base.metadata.create_all(bind=engine)
    
    db = SessionLocal()
    try:
        # Check if admin already exists
        admin_email = "trafivista@gmail.com"
        admin_user = db.query(User).filter(User.email == admin_email).first()
        
        if not admin_user:
            print(f"Seeding admin user: {admin_email}")
            new_admin = User(
                email=admin_email,
                hashed_password=get_password_hash("grizzly"),
                full_name="System Admin",
                is_active=True,
                is_admin=True
            )
            db.add(new_admin)
            db.commit()
            print("Admin user created successfully.")
        else:
            print("Admin user already exists.")
            
    finally:
        db.close()
    
    print("Database initialization complete.")

if __name__ == "__main__":
    init_db()
