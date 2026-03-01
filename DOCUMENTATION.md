# TrafiVista - Complete Documentation

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Setup and Installation](#setup-and-installation)
5. [Backend Development](#backend-development)
6. [Frontend Development](#frontend-development)
7. [API Documentation](#api-documentation)
8. [Database Schema](#database-schema)
9. [Authentication & Security](#authentication--security)
10. [Machine Learning Pipeline](#machine-learning-pipeline)
11. [Deployment Guide](#deployment-guide)
12. [Contributing Guidelines](#contributing-guidelines)
13. [Troubleshooting](#troubleshooting)

---

## Project Overview

**TrafiVista** is a comprehensive traffic prediction system designed to forecast traffic congestion levels across Indian cities and states. It combines real-time traffic data collection with machine learning predictions to provide actionable insights.

### Key Features

- **User Authentication**: Secure JWT-based authentication system
- **Traffic Data Upload**: Users can upload traffic records with multiple parameters
- **ML-Powered Predictions**: Advanced scikit-learn model predicts congestion levels and confidence scores
- **Role-Based Access**: Separate user and admin dashboards with distinct capabilities
- **Data Analytics**: Admins can view aggregated traffic patterns and system statistics
- **Responsive UI**: Modern React-based interface with Tailwind CSS and Shadcn UI components
- **Real-time Updates**: Query caching and efficient API communication

### Use Cases

1. **For Commuters**: Get traffic predictions for better route planning
2. **For City Planners**: Analyze traffic patterns and optimize infrastructure
3. **For Administrators**: Monitor system health and manage user data

---

## Tech Stack

### Backend
- **Framework**: FastAPI 0.109.0
- **Server**: Uvicorn 0.27.0
- **ORM**: SQLAlchemy 2.0.25
- **Validation**: Pydantic 2.5.3
- **Authentication**: Python-Jose 3.3.0, Passlib 1.7.4
- **Database**: SQLite (development) / PostgreSQL (production)
- **ML Libraries**: Scikit-learn 1.4.0, Pandas 2.2.0, NumPy 1.26.3

### Frontend
- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **CSS Framework**: Tailwind CSS 3
- **Component Library**: Shadcn UI (built on Radix UI)
- **HTTP Client**: Axios 1.13.6
- **State Management**: TanStack Query (React Query) 5.83.0
- **Routing**: React Router 6
- **Form Handling**: React Hook Form + Zod
- **Testing**: Vitest
- **Linting**: ESLint

---

## Project Structure

```
project-root/
├── backend/
│   ├── app/
│   │   ├── __init__.py                 # FastAPI app initialization
│   │   ├── main.py                     # Main application entry point
│   │   ├── api/
│   │   │   ├── __init__.py
│   │   │   ├── deps.py                 # Dependency injection functions
│   │   │   └── endpoints/
│   │   │       ├── auth.py             # Authentication routes
│   │   │       └── traffic.py          # Traffic data routes
│   │   ├── core/
│   │   │   └── security.py             # Security utilities (hashing, JWT)
│   │   ├── db/
│   │   │   └── session.py              # Database configuration & session
│   │   ├── ml/
│   │   │   └── model.py                # ML model & prediction logic
│   │   ├── models/
│   │   │   ├── user.py                 # User SQLAlchemy model
│   │   │   └── traffic.py              # TrafficRecord SQLAlchemy model
│   │   └── schemas/
│   │       ├── user.py                 # Pydantic schemas for users
│   │       └── traffic.py              # Pydantic schemas for traffic
│   ├── requirements.txt                # Python dependencies
│   ├── init_db.py                      # Database initialization script
│   └── test_roles.py                   # Role-based testing
│
├── frontend/
│   ├── src/
│   │   ├── main.tsx                    # React entry point
│   │   ├── App.tsx                     # Root React component
│   │   ├── App.css                     # Global styles
│   │   ├── index.css                   # Tailwind & global CSS
│   │   ├── vite-env.d.ts               # Vite environment types
│   │   ├── components/
│   │   │   ├── NavLink.tsx             # Navigation link component
│   │   │   ├── dashboard/
│   │   │   │   └── DashboardLayout.tsx # Common dashboard layout
│   │   │   ├── landing/
│   │   │   │   ├── Navbar.tsx          # Landing page navbar
│   │   │   │   ├── HeroSection.tsx     # Hero banner
│   │   │   │   ├── FeaturesSection.tsx # Features showcase
│   │   │   │   ├── HowItWorksSection.tsx # Tutorial section
│   │   │   │   ├── CTASection.tsx      # Call-to-action
│   │   │   │   └── Footer.tsx          # Footer
│   │   │   └── ui/                     # Shadcn UI components
│   │   │       ├── button.tsx
│   │   │       ├── card.tsx
│   │   │       ├── input.tsx
│   │   │       ├── form.tsx
│   │   │       └── ... (20+ more UI components)
│   │   ├── data/
│   │   │   └── india-locations.ts      # Geographic data (states, cities)
│   │   ├── hooks/
│   │   │   ├── use-mobile.tsx          # Mobile detection hook
│   │   │   └── use-toast.ts            # Toast notification hook
│   │   ├── lib/
│   │   │   ├── api.ts                  # API client configuration
│   │   │   └── utils.ts                # Utility functions
│   │   ├── pages/
│   │   │   ├── Index.tsx               # Landing page
│   │   │   ├── Auth.tsx                # Login/Register page
│   │   │   ├── UserDashboard.tsx       # User overview dashboard
│   │   │   ├── UserUpload.tsx          # Traffic data upload page
│   │   │   ├── UserPredictions.tsx     # Predictions history & new predictions
│   │   │   ├── PredictionResult.tsx    # Single prediction result display
│   │   │   ├── AdminDashboard.tsx      # Admin overview
│   │   │   ├── AdminDatasets.tsx       # Dataset management
│   │   │   ├── AdminSettings.tsx       # Admin settings
│   │   │   └── NotFound.tsx            # 404 page
│   │   └── test/
│   │       ├── setup.ts                # Test configuration
│   │       └── example.test.ts         # Example test
│   ├── public/
│   │   └── robots.txt                  # SEO robots file
│   ├── package.json                    # NPM dependencies & scripts
│   ├── vite.config.ts                  # Vite configuration
│   ├── vitest.config.ts                # Vitest configuration
│   ├── tsconfig.json                   # TypeScript config (base)
│   ├── tsconfig.app.json               # TypeScript config (app)
│   ├── tsconfig.node.json              # TypeScript config (node)
│   ├── tailwind.config.ts              # Tailwind CSS config
│   ├── postcss.config.js               # PostCSS config
│   ├── eslint.config.js                # ESLint configuration
│   ├── components.json                 # Shadcn CLI config
│   ├── index.html                      # HTML entry point
│   └── README.md                       # Frontend-specific README
│
├── ARCHITECTURE.md                     # System architecture diagrams
├── DOCUMENTATION.md                    # This file
└── README.md                           # Project root README
```

---

## Setup and Installation

### Prerequisites

- Python 3.10 or higher (backend)
- Node.js 18+ and npm/bun (frontend)
- Git
- PostgreSQL or SQLite (for database)

### Backend Setup

1. **Navigate to backend directory**:
   ```bash
   cd backend
   ```

2. **Create virtual environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables** (create `.env` file):
   ```
   DATABASE_URL=sqlite:///./test.db
   SECRET_KEY=your-secret-key-here-change-in-production
   ALGORITHM=HS256
   ACCESS_TOKEN_EXPIRE_MINUTES=30
   ```

5. **Initialize database**:
   ```bash
   python init_db.py
   ```

6. **Run backend server**:
   ```bash
   uvicorn app.main:app --reload --port 8000
   ```

Backend will be available at `http://localhost:8000`

### Frontend Setup

1. **Navigate to frontend directory**:
   ```bash
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   bun install
   ```

3. **Set up environment variables** (create `.env.local`):
   ```
   VITE_API_BASE_URL=http://localhost:8000
   ```

4. **Run development server**:
   ```bash
   npm run dev
   # or
   bun run dev
   ```

Frontend will be available at `http://localhost:5173`

---

## Backend Development

### Project Structure Explanation

#### `app/main.py`
The entry point for the FastAPI application. It:
- Creates the FastAPI app instance
- Configures CORS middleware for frontend communication
- Registers API routers (auth, traffic)
- Provides health check endpoint

#### `app/api/deps.py`
Contains dependency injection functions used across endpoints:
- `get_db()`: Provides database session to endpoints
- `get_current_user()`: Validates JWT token and retrieves current user

#### `app/api/endpoints/auth.py`
Authentication endpoints:
- `POST /api/auth/register`: Create new user account
- `POST /api/auth/login`: Authenticate user and return JWT token
- `POST /api/auth/refresh-token`: Refresh expired token
- `GET /api/auth/me`: Get current authenticated user info

#### `app/api/endpoints/traffic.py`
Traffic data endpoints:
- `POST /api/traffic/upload`: Upload traffic data. **Admin uploads are saved to database; user uploads are used only to improve model accuracy in-memory without persistence**
- `POST /api/traffic/predict`: Get ML prediction for specific location/time
- `GET /api/traffic/history`: Retrieve historical traffic records **for the current user only** (admin users only see their own saved datasets)
- `GET /api/traffic/analytics`: Get aggregated analytics (admin only)

#### `app/core/security.py`
Security utilities:
- Password hashing with bcrypt
- JWT token creation and validation
- Permission checking functions

#### `app/db/session.py`
Database configuration:
- SQLAlchemy engine setup
- Session factory creation
- Database URL configuration

#### `app/ml/model.py`
Machine learning model:
- Trained scikit-learn model for traffic prediction
- `predict(timestamp, spot)` method returning congestion level and confidence
- Model training pipeline (if applicable)

#### `app/models/`
SQLAlchemy ORM models:
- **User**: Represents system users with admin role support
- **TrafficRecord**: Represents traffic data points with ML predictions

#### `app/schemas/`
Pydantic schemas for request/response validation:
- Input schemas for API requests
- Output schemas for API responses
- Automatic OpenAPI documentation generation

### Running Tests

```bash
# Run role-based access tests
python test_roles.py

# Run with pytest (if configured)
pytest
```

---

## Frontend Development

### Project Structure Explanation

#### `src/pages/`
Each page corresponds to a route:
- **Index.tsx**: Landing page with features and calls-to-action
- **Auth.tsx**: Combined login/register form with form validation
- **UserDashboard.tsx**: Overview of user's traffic data and predictions
- **UserUpload.tsx**: Form to upload new traffic records
- **UserPredictions.tsx**: View prediction history and create new predictions
- **AdminDashboard.tsx**: System overview with statistics
- **AdminDatasets.tsx**: Manage datasets for ML model retraining
- **AdminSettings.tsx**: System configuration and settings
- **PredictionResult.tsx**: Display detailed prediction results
- **NotFound.tsx**: 404 error page

#### `src/components/`
Reusable React components:
- **Landing components**: Navbar, Hero, Features, Footer
- **Dashboard components**: Layout wrapper
- **UI components**: Shadcn/ui library components

#### `src/lib/api.ts`
Axios configuration and API client:
- Base URL configuration
- Automatic JWT token injection
- Error handling and interceptors
- Request/response formatting

#### `src/lib/utils.ts`
Utility functions:
- String formatting
- Data transformation
- Common helpers

#### `src/hooks/`
Custom React hooks:
- `use-mobile.ts`: Detect if on mobile device
- `use-toast.ts`: Toast notification system

#### `src/data/india-locations.ts`
Geographic data:
- States and districts in India
- Cities within districts
- Used for location selection in forms

### Build and Run Commands

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Run tests
npm run test

# Watch mode tests
npm run test:watch

# Lint code
npm run lint
```

---

## API Documentation

### Authentication Endpoints

#### Register User
```
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "secure_password",
  "full_name": "John Doe"
}

Response (201):
{
  "id": 1,
  "email": "user@example.com",
  "full_name": "John Doe",
  "is_active": true,
  "is_admin": false,
  "created_at": "2024-01-15T10:30:00Z"
}
```

#### Login
```
POST /api/auth/login
Content-Type: application/x-www-form-urlencoded

email=user@example.com&password=secure_password

Response (200):
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "bearer",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "is_admin": false
  }
}
```

#### Get Current User
```
GET /api/auth/me
Authorization: Bearer {access_token}

Response (200):
{
  "id": 1,
  "email": "user@example.com",
  "full_name": "John Doe",
  "is_active": true,
  "is_admin": false,
  "created_at": "2024-01-15T10:30:00Z"
}
```

### Traffic Endpoints

#### Upload Traffic Record
Behavior depends on user role:
- **Admin uploads**: Saved to database and used for model training
- **User uploads**: Not persisted to database, but used to improve model accuracy in-memory

```
POST /api/traffic/upload
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "state": "Maharashtra",
  "district": "Mumbai",
  "city": "Mumbai",
  "spot": "Bandra Worli Sea Link",
  "vehicle_count": 1250,
  "average_speed": 45.5,
  "congestion_level": "Medium",
  "timestamp": "2024-01-15T14:30:00Z"
}

Response (200):
If Admin:
{
  "id": 1,
  "state": "Maharashtra",
  "district": "Mumbai",
  "city": "Mumbai",
  "spot": "Bandra Worli Sea Link",
  "vehicle_count": 1250,
  "average_speed": 45.5,
  "congestion_level": "Medium",
  "timestamp": "2024-01-15T14:30:00Z",
  "uploaded_by_id": 1,
  "created_at": "2024-01-15T14:35:00Z"
}

If Regular User:
{
  "id": 0,
  "state": "Maharashtra",
  "district": "Mumbai",
  "city": "Mumbai",
  "spot": "Bandra Worli Sea Link",
  "vehicle_count": 1250,
  "average_speed": 45.5,
  "congestion_level": "Medium",
  "timestamp": "2024-01-15T14:30:00Z",
  "uploaded_by_id": {user_id},
  "created_at": "{current_timestamp}"
} 
(Note: id=0 indicates non-persistent training data)
```

#### Get Traffic Predictions
```
POST /api/traffic/predict
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "timestamp": "2024-01-15T18:00:00Z",
  "spot": "Gateway of India",
  "state": "Maharashtra",
  "district": "Mumbai",
  "city": "Mumbai"
}

Response (200):
{
  "congestion_level": "High",
  "confidence": 0.92
}
```

#### Get Traffic History
```
GET /api/traffic/history?skip=0&limit=20
Authorization: Bearer {access_token}

Response (200):
[
  {
    "id": 1,
    "state": "Maharashtra",
    "city": "Mumbai",
    "spot": "Gateway of India",
    "congestion_level": "High",
    "confidence": 0.92,
    "timestamp": "2024-01-15T18:00:00Z",
    "created_at": "2024-01-15T18:05:00Z"
  },
  ...
]
```

#### Get Analytics (Admin Only)
```
GET /api/traffic/analytics?period=week
Authorization: Bearer {admin_access_token}

Response (200):
{
  "total_records": 5432,
  "average_congestion": 0.65,
  "top_spots": [
    {
      "spot": "Gateway of India",
      "average_congestion": 0.78,
      "record_count": 234
    }
  ],
  "daily_trends": [...]
}
```

---

## Database Schema

### User Table
```sql
CREATE TABLE user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email VARCHAR UNIQUE NOT NULL,
    hashed_password VARCHAR NOT NULL,
    full_name VARCHAR,
    is_active BOOLEAN DEFAULT TRUE,
    is_admin BOOLEAN DEFAULT FALSE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### TrafficRecord Table
```sql
CREATE TABLE traffic_records (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    state VARCHAR NOT NULL,
    district VARCHAR NOT NULL,
    city VARCHAR NOT NULL,
    spot VARCHAR NOT NULL,
    vehicle_count INTEGER,
    average_speed FLOAT,
    congestion_level VARCHAR,  -- "Low", "Medium", "High"
    confidence FLOAT,           -- 0.0 - 1.0
    timestamp DATETIME NOT NULL,
    uploaded_by_id INTEGER NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (uploaded_by_id) REFERENCES user(id)
);

CREATE INDEX idx_traffic_timestamp ON traffic_records(timestamp);
CREATE INDEX idx_traffic_spot ON traffic_records(spot);
CREATE INDEX idx_traffic_user ON traffic_records(uploaded_by_id);
```

---

## Authentication & Security

### JWT Token Flow

1. **User Login**:
   - User sends email and password
   - Backend hashes password and compares with stored hash
   - If valid, generates JWT token with user ID and expiry
   - Token sent to frontend

2. **Token Usage**:
   - Frontend stores token in localStorage
   - Included in `Authorization: Bearer {token}` header for all requests
   - Backend validates token signature and expiry

3. **Token Refresh**:
   - Short-lived tokens (30 minutes default)
   - Frontend calls `/api/auth/refresh-token` before expiry
   - Backend issues new token

### Password Security

- Passwords hashed using bcrypt algorithm
- Never stored in plain text
- Minimum requirements enforced (recommended 8+ characters)
- Salting prevents rainbow table attacks

### CORS Configuration

- Currently allows all origins (`*`) in development
- **Must be restricted in production**
- Only allow specific frontend domains
- Credentials only sent with matching domains

### Environment Variables

All sensitive data must be in `.env` file (never committed):
- `SECRET_KEY`: For JWT signing
- `DATABASE_URL`: Database connection string
- `ALGORITHM`: Token algorithm (HS256)
- `ACCESS_TOKEN_EXPIRE_MINUTES`: Token validity period

---

## Machine Learning Pipeline

### Model Architecture

The ML model (`app/ml/model.py`) uses scikit-learn for traffic prediction:

**Input Features**:
- Timestamp (hour, day of week, month)
- Spot/Location identifier
- Historical traffic patterns

**Output**:
- `congestion_level`: Categorical (Low, Medium, High)
- `confidence`: Float (0.0 - 1.0) indicating prediction confidence

### Training Pipeline

```python
# Simplified training process
1. Load historical traffic data from database
2. Feature engineering:
   - Extract temporal features from timestamp
   - One-hot encode location data
   - Normalize numerical features
3. Train classifier on historical data
4. Evaluate model performance
5. Save trained model to disk
```

### Model Improvement

To improve predictions:
1. Collect more diverse traffic data
2. Add weather features (temperature, rainfall)
3. Include events and holidays
4. Use ensemble methods combining multiple models
5. Implement online learning for continuous improvement

### Prediction Process

```python
def predict(timestamp: datetime, spot: str) -> Tuple[str, float]:
    # Extract features from input
    features = extract_features(timestamp, spot)
    
    # Make prediction using trained model
    probability = model.predict_proba(features)
    congestion_class = model.predict(features)
    confidence = max(probability[0])
    
    return congestion_class, confidence
```

---

## Deployment Guide

### Backend Deployment

#### Using Heroku
```bash
# Login to Heroku
heroku login

# Create app
heroku create trafiVista-api

# Set environment variables
heroku config:set SECRET_KEY="your-secret-key"
heroku config:set DATABASE_URL="postgresql://..."

# Deploy
git push heroku main
```

#### Using Docker
```dockerfile
FROM python:3.10
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

#### Environment Setup
- Set `DATABASE_URL` to production PostgreSQL address
- Set `SECRET_KEY` to strong random value
- Disable CORS wildcard, allow only frontend domain
- Enable HTTPS/SSL
- Set up database backups

### Frontend Deployment

#### Using Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Configure environment
# Add VITE_API_BASE_URL to production environment
```

#### Using Docker
```dockerfile
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### Production Checklist
- Build with `npm run build`
- Set correct API base URL
- Enable gzip compression
- Set cache headers for assets
- Configure CDN for static files
- Set up monitoring and error tracking

### Database Deployment

#### PostgreSQL Cloud Providers
- AWS RDS
- Google Cloud SQL
- Azure Database
- Heroku Postgres

#### Migration to Production
```bash
# Create database dump
pg_dump local_db > backup.sql

# Restore on production
psql production_db < backup.sql

# Run migrations if applicable
alembic upgrade head
```

---

## Contributing Guidelines

### Code Style

#### Backend (Python)
- Follow PEP 8 style guide
- Use type hints for functions
- Maximum line length: 100 characters
- Docstrings for all public functions

```python
def create_traffic_record(
    record_data: TrafficRecordCreate,
    db: Session,
    user_id: int
) -> TrafficRecord:
    """
    Create and save a new traffic record.
    
    Args:
        record_data: Traffic record input schema
        db: Database session
        user_id: ID of user uploading record
        
    Returns:
        Created TrafficRecord instance
    """
    db_record = TrafficRecord(**record_data.dict(), uploaded_by_id=user_id)
    db.add(db_record)
    db.commit()
    db.refresh(db_record)
    return db_record
```

#### Frontend (TypeScript/React)
- Use functional components with hooks
- Props should be typed with interfaces
- Use meaningful variable names
- Maximum line length: 100 characters
- Add JSDoc comments for complex logic

```typescript
interface PredictionProps {
  spot: string;
  timestamp: Date;
  onPredictionComplete?: (result: PredictionResult) => void;
}

export const PredictionForm: React.FC<PredictionProps> = ({
  spot,
  timestamp,
  onPredictionComplete,
}) => {
  // Component logic
};
```

### Git Workflow

1. **Create feature branch**:
   ```bash
   git checkout -b feature/implement-new-feature
   ```

2. **Make changes and commit**:
   ```bash
   git add .
   git commit -m "feat: add new traffic prediction feature"
   ```

3. **Push and create pull request**:
   ```bash
   git push origin feature/implement-new-feature
   ```

4. **Commit Message Format**:
   - `feat:` New feature
   - `fix:` Bug fix
   - `docs:` Documentation update
   - `style:` Code style changes
   - `refactor:` Code refactoring
   - `test:` Test additions/changes

### Testing Requirements

- Backend: Write unit tests for new endpoints
- Frontend: Write tests for new components
- Maintain >80% code coverage
- All tests must pass before merging

### Pull Request Process

1. Update documentation if needed
2. Add tests for new functionality
3. Ensure linting passes
4. Request review from relevant team member
5. Address feedback and push changes
6. Merge after approval

---

## Troubleshooting

### Common Backend Issues

#### Database Connection Error
**Problem**: `sqlite3.OperationalError: unable to open database file`
**Solution**:
```bash
# Ensure database directory exists
mkdir -p data

# Reinitialize database
python init_db.py
```

#### CORS Error
**Problem**: `Access to XMLHttpRequest blocked by CORS policy`
**Solution**:
- Check CORS middleware configuration in `main.py`
- Ensure frontend URL is in `allow_origins`
- Verify request includes proper headers

#### Authentication Failing
**Problem**: `Invalid token` or `Token expired`
**Solution**:
- Check JWT token in localStorage
- Verify `SECRET_KEY` matches between login/verification
- Check token expiry time setting
- Clear localStorage and re-login

### Common Frontend Issues

#### API Calls Failing
**Problem**: Axios requests returning 404
**Solution**:
```typescript
// Check API base URL
console.log(import.meta.env.VITE_API_BASE_URL)

// Verify endpoint paths match backend routes
// Check that JWT token is being sent
```

#### Component Not Rendering
**Problem**: Empty page or white screen
**Solution**:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear browser cache
# Restart dev server
npm run dev
```

#### Styling Not Applied
**Problem**: Tailwind classes not working
**Solution**:
- Restart dev server
- Check `tailwind.config.ts` includes all template paths
- Verify Tailwind CSS is imported in `index.css`
- Clear `.next` or `dist` directories if they exist

### Performance Optimization

#### Slow API Responses
- Enable database query caching
- Add indexes to frequently queried columns
- Use pagination for large datasets
- Implement query result caching in frontend

#### High Frontend Bundle Size
```bash
# Analyze bundle
npm run build -- --analyze

# Solutions:
# - Code-split large components
# - Lazy load routes
# - Remove unused dependencies
```

#### Database Slowness
```sql
-- Add indexes for common queries
CREATE INDEX idx_traffic_user_date 
ON traffic_records(uploaded_by_id, created_at);

-- Monitor query performance
EXPLAIN QUERY PLAN SELECT ...;
```

---

## Support and Resources

- **FastAPI Docs**: https://fastapi.tiangolo.com/
- **React Docs**: https://react.dev/
- **SQLAlchemy Docs**: https://docs.sqlalchemy.org/
- **Tailwind CSS**: https://tailwindcss.com/
- **Scikit-learn**: https://scikit-learn.org/

For issues or questions, please:
1. Check existing documentation
2. Search GitHub issues
3. Create detailed issue report with:
   - Steps to reproduce
   - Expected vs actual behavior
   - Environment details
   - Error logs
