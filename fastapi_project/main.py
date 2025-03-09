from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {
        "name": "Microservices Management API",
        "version": "1.0.0",
        "author": "Developed by KODANCHA",
        "description": "API built with FastAPI for efficient microservices management.",
        "status": "Active",
        "last_updated": "2025-03-08",
        "documentation": "/docs"
    }
