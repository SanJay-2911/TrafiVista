# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set environment variables
# Prevents Python from writing pyc files to disc
ENV PYTHONDONTWRITEBYTECODE 1
# Prevents Python from buffering stdout and stderr
ENV PYTHONUNBUFFERED 1

# Set the working directory in the container
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# Copy the requirements file into the container at /app
COPY requirements.txt .

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the current directory contents into the container at /app
COPY . .

# Expose port 8000 for the FastAPI app
EXPOSE 8000

# Command to run the application
# We use 'sh -c' to run multiple commands: first initialize the database, then start the server
# --host 0.0.0.0 is required for Docker
CMD ["sh", "-c", "python init_db.py && python -m uvicorn app.main:app --host 0.0.0.0 --port 8000"]
