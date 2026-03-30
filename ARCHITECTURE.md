# TrafiVista - Architecture Diagram

## System Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          CLIENT LAYER (Frontend)                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │                    React + TypeScript + Vite                         │   │
│  │  ┌──────────────────────────────────────────────────────────────┐   │   │
│  │  │                   Pages & Components                         │   │   │
│  │  │  ┌──────────────────┬──────────────────┬─────────────────┐  │   │   │
│  │  │  │   Landing Page   │    Auth Page     │  User Dashboard │  │   │   │
│  │  │  │  - Hero Section  │  - Login/SignUp  │  - View Data    │  │   │   │
│  │  │  │  - Features      │  - Form Validation         - Upload │  │   │   │
│  │  │  │  - How It Works  │                  │  - Predictions  │  │   │   │
│  │  │  └──────────────────┴──────────────────┴─────────────────┘  │   │   │
│  │  │                                                              │   │   │
│  │  │  ┌──────────────────────────────────────────────────────┐  │   │   │
│  │  │  │         Admin Dashboard & Settings                  │  │   │   │
│  │  │  │  - Manage Users  - Manage Datasets                  │  │   │   │
│  │  │  │  - System Settings - Analytics                      │  │   │   │
│  │  │  └──────────────────────────────────────────────────────┘  │   │   │
│  │  │                                                              │   │   │
│  │  │  UI Components (Shadcn UI)                                  │   │   │
│  │  │  - Buttons, Cards, Dialogs, Forms, etc.                    │   │   │
│  │  └──────────────────────────────────────────────────────────┘   │   │
│  │                                                                   │   │
│  │  State Management & Data Fetching                              │   │   │
│  │  - TanStack Query (React Query) - HTTP Client (Axios)          │   │   │
│  │  - React Router - Hooks (custom)                               │   │   │
│  └──────────────────────────────────────────────────────────────┘   │   │
│                                                                       │   │
└─────────────────────────────────────────────────────────────────────────────┘
                                  │
                                  │ HTTP/REST API
                                  │ (JSON)
                                  ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                        API LAYER (Backend)                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │                       FastAPI Application                           │   │
│  │                                                                      │   │
│  │  ┌──────────────────────────────────────────────────────────────┐  │   │
│  │  │                    API Routers                               │  │   │
│  │  │  ┌─────────────────────┬──────────────────────────────────┐ │   │   │
│  │  │  │   Auth Router       │   Traffic Router               │ │   │   │
│  │  │  │  - /login           │  - /api/traffic/predict        │ │   │   │
│  │  │  │  - /register        │  - /api/traffic/upload         │ │   │   │
│  │  │  │  - /refresh-token   │  - /api/traffic/history        │ │   │   │
│  │  │  │  - /me              │  - /api/traffic/analytics      │ │   │   │
│  │  │  └─────────────────────┴──────────────────────────────────┘ │   │   │
│  │  │                                                              │   │   │
│  │  │  Middleware & Security                                      │   │   │
│  │  │  - CORS Configuration - JWT Authentication                 │   │   │
│  │  │  - Request Validation - Error Handling                     │   │   │
│  │  └──────────────────────────────────────────────────────────┘   │   │
│  │                                                                   │   │
│  │  Dependency Injection (deps.py)                                 │   │   │
│  │  - get_current_user() - get_db()                                │   │   │
│  └──────────────────────────────────────────────────────────────┘   │   │
│                                                                       │   │
│  ┌──────────────────────────────────────────────────────────────────┐  │   │
│  │               Business Logic & Data Schemas                      │  │   │
│  │  ┌──────────────┐  ┌──────────────────┐  ┌──────────────────┐  │  │   │
│  │  │   Schemas    │  │  Security Utils  │  │  ML Integration  │  │  │   │
│  │  │ - UserCreate │  │ - password_hash  │  │ - model.predict  │  │  │   │
│  │  │ - TrafficRec │  │ - verify_password│  │ - training logic │  │  │   │
│  │  │ - Prediction │  │ - create_token   │  │                  │  │  │   │
│  │  └──────────────┘  └──────────────────┘  └──────────────────┘  │  │   │
│  └──────────────────────────────────────────────────────────────────┘  │   │
│                                                                       │   │
└─────────────────────────────────────────────────────────────────────────────┘
                                  │
                                  │ ORM (SQLAlchemy)
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                      DATA ACCESS LAYER (DAL)                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │                   SQLAlchemy ORM Layer                              │   │
│  │  ┌────────────────────────────────────────────────────────────────┐ │   │
│  │  │                    Models                                      │ │   │
│  │  │  ┌─────────────────────┬──────────────────────────────────┐  │ │   │
│  │  │  │      User Model     │   TrafficRecord Model           │  │ │   │
│  │  │  │  - id (PK)          │  - id (PK)                      │  │ │   │
│  │  │  │  - email (unique)   │  - state, district, city, spot  │  │ │   │
│  │  │  │  - hashed_password  │  - vehicle_count                │  │ │   │
│  │  │  │  - full_name        │  - average_speed                │  │ │   │
│  │  │  │  - is_active        │  - congestion_level             │  │ │   │
│  │  │  │  - is_admin         │  - confidence (ML score)        │  │ │   │
│  │  │  │  - created_at       │  - timestamp                    │  │ │   │
│  │  │  │                     │  - uploaded_by_id (FK)          │  │ │   │
│  │  │  │                     │  - created_at                   │  │ │   │
│  │  │  └─────────────────────┴──────────────────────────────────┘  │ │   │
│  │  │                                                               │ │   │
│  │  │  Relationships                                               │ │   │
│  │  │  - User (1) ──────→ (Many) TrafficRecord                     │ │   │
│  │  └────────────────────────────────────────────────────────────────┘ │   │
│  │                                                                      │   │
│  │  Session Management (session.py)                                   │   │
│  │  - DatabaseURL Configuration - SessionLocal Factory               │   │
│  │  - get_db() Dependency - Connection Pooling                       │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
└─────────────────────────────────────────────────────────────────────────────┘
                                  │
                                  │ SQL
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                    DATABASE LAYER                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│     ┌──────────────────────────────────────────────────────────────────┐    │
│     │        Relational Database (SQLite / PostgreSQL)                │    │
│     │  ┌────────────────────┬───────────────────────────────────────┐ │    │
│     │  │   user table       │   traffic_records table              │ │    │
│     │  │  ┌──────────────┐  │  ┌──────────────────────────────────┐│ │    │
│     │  │  │ id (PK)      │  │  │ id (PK)                          ││ │    │
│     │  │  │ email        │  │  │ state, district, city, spot      ││ │    │
│     │  │  │ hashed_pwd   │  │  │ vehicle_count, avg_speed         ││ │    │
│     │  │  │ full_name    │  │  │ congestion_level, confidence     ││ │    │
│     │  │  │ is_active    │  │  │ timestamp                        ││ │    │
│     │  │  │ is_admin     │  │  │ uploaded_by_id (FK→user)         ││ │    │
│     │  │  │ created_at   │  │  │ created_at                       ││ │    │
│     │  │  └──────────────┘  │  └──────────────────────────────────┘│ │    │
│     │  └────────────────────┴───────────────────────────────────────┘ │    │
│     └──────────────────────────────────────────────────────────────────┘    │
│                                                                               │
└─────────────────────────────────────────────────────────────────────────────┘
                                  
┌─────────────────────────────────────────────────────────────────────────────┐
│                       ML LAYER (Machine Learning)                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │                  ML Model Pipeline (model.py)                       │   │
│  │  ┌────────────────────────────────────────────────────────────────┐ │   │
│  │  │  Scikit-learn Model                                           │ │   │
│  │  │  - Classification/Regression Model                            │ │   │
│  │  │  - Trained on Historical Traffic Data                         │ │   │
│  │  │  - Prediction: (timestamp, spot) → congestion_level + confidence  │   │
│  │  │                                                                │ │   │
│  │  │  ML Libraries Used:                                           │ │   │
│  │  │  - scikit-learn v1.4.0  - NumPy v1.26.3                       │ │   │
│  │  │  - Pandas v2.2.0                                              │ │   │
│  │  └────────────────────────────────────────────────────────────────┘ │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                               │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Data Flow Diagram

```
┌──────────────────┐
│   User Action    │
│  (Click Button)  │
└────────┬─────────┘
         │
         ▼
┌──────────────────────────────────────────────┐
│  React Component Event Handler               │
│  - Validates form input                      │
│  - Prepares request payload                  │
└────────┬─────────────────────────────────────┘
         │
         ▼
┌──────────────────────────────────────────────┐
│  TanStack Query / Axios                      │
│  - Sends HTTP request with JWT token         │
│  - Handles retries & caching                 │
└────────┬─────────────────────────────────────┘
         │ HTTP Request
         │
         ▼
┌──────────────────────────────────────────────┐
│  FastAPI Router                              │
│  - CORS middleware processes request         │
│  - Route matches endpoint                    │
└────────┬─────────────────────────────────────┘
         │
         ▼
┌──────────────────────────────────────────────┐
│  Dependency Injection                        │
│  - JWT validation via get_current_user()     │
│  - Database session via get_db()             │
└────────┬─────────────────────────────────────┘
         │
         ▼
┌──────────────────────────────────────────────┐
│  Request Handler / Business Logic            │
│  - Validate input schemas                    │
│  - Call ML model if prediction needed        │
│  - Prepare database operations               │
└────────┬─────────────────────────────────────┘
         │
         ▼
┌──────────────────────────────────────────────┐
│  ML Model (if applicable)                    │
│  - Input: timestamp, spot, location data     │
│  - Output: congestion_level, confidence      │
└────────┬─────────────────────────────────────┘
         │
         ▼
┌──────────────────────────────────────────────┐
│  SQLAlchemy ORM                              │
│  - Build SQL from model operations           │
│  - Execute queries on database               │
│  - Handle transactions & commits             │
└────────┬─────────────────────────────────────┘
         │ SQL
         │
         ▼
┌──────────────────────────────────────────────┐
│  Relational Database                         │
│  - CRUD operations on tables                 │
│  - Return data rows                          │
└────────┬─────────────────────────────────────┘
         │
         ▼
┌──────────────────────────────────────────────┐
│  Response Assembly                           │
│  - Serialize ORM objects to Pydantic schemas │
│  - Convert to JSON                           │
└────────┬─────────────────────────────────────┘
         │ HTTP Response (JSON)
         │
         ▼
┌──────────────────────────────────────────────┐
│  TanStack Query                              │
│  - Store in cache                            │
│  - Trigger component re-render               │
└────────┬─────────────────────────────────────┘
         │
         ▼
┌──────────────────────────────────────────────┐
│  React Component                             │
│  - Update state                              │
│  - Re-render UI with new data                │
└────────┬─────────────────────────────────────┘
         │
         ▼
┌──────────────────────┐
│   User Sees Result   │
│   (Page Updates)     │
└──────────────────────┘
```

## Component Interaction Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        FRONTEND                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  App.tsx (Router Configuration)                                │
│       │                                                         │
│       ├─→ Index.tsx (Landing Page)                             │
│       │                                                         │
│       ├─→ Auth.tsx (Login/Register)                            │
│       │   └─→ Posts data to /api/auth/login or /register      │
│       │                                                         │
│       ├─→ UserDashboard.tsx                                    │
│       │   ├─→ Fetch user data from /api/auth/me               │
│       │   └─→ Render user-specific info                       │
│       │                                                         │
│       ├─→ UserUpload.tsx                                       │
│       │   ├─→ POST to /api/traffic/upload (saves if admin)  │
│       │                                                         │
│       ├─→ UserPredictions.tsx                                  │
│       │   ├─→ GET from /api/traffic/history (only admin|owner records)
│       │   └─→ POST to /api/traffic/predict                    │
│       │                                                         │
│       ├─→ AdminDashboard.tsx                                   │
│       │   └─→ Admin-specific metrics & controls               │
│       │                                                         │
│       ├─→ AdminDatasets.tsx                                    │
│       │   └─→ Manage datasets for ML model                    │
│       │                                                         │
│       ├─→ AdminSettings.tsx                                    │
│       │   └─→ System configuration                            │
│       │                                                         │
│       ├─→ PredictionResult.tsx                                 │
│       │   └─→ Display prediction results                      │
│       │                                                         │
│       └─→ NotFound.tsx (404 Page)                              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Technology Stack Summary

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | React 18, TypeScript, Vite | UI Framework |
| **Frontend Styling** | Tailwind CSS, Shadcn UI | Component Library & Styling |
| **Frontend State** | TanStack Query, React Router | Data Fetching & Navigation |
| **API Communication** | Axios | HTTP Client |
| **Backend Framework** | FastAPI | REST API Server |
| **Backend Server** | Uvicorn | ASGI Server |
| **ORM** | SQLAlchemy 2.0 | Database Abstraction |
| **Authentication** | JWT (python-jose), Passlib | Security |
| **Database** | SQLite/PostgreSQL | Data Persistence |
| **Machine Learning** | Scikit-learn, Pandas, NumPy | Traffic Prediction Model |
| **Build Tool** | Vite | Frontend Build & Dev Server |
| **Testing** | Vitest | Frontend Unit Testing |
| **Linting** | ESLint | Code Quality |
