# ==========================================
# Production Dockerfile for Flask Backend
# ==========================================
FROM python:3.11-slim

# Prevent Python from writing .pyc files and enable unbuffered logging
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PORT=5000

WORKDIR /app

# Create non-root user for production security
RUN adduser --disabled-password --gecos "" appuser

# Install system dependencies & python requirements
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend application files
COPY . .

# Grant permissions to non-root user
RUN chown -R appuser:appuser /app
USER appuser

EXPOSE 5000

# Run with Gunicorn WSGI server for production reliability
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "--workers", "2", "--threads", "4", "app:app"]
