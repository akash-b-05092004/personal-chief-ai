from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.chat import router as chat_router
from app.db.base import Base
from app.db.session import engine

app = FastAPI(title="Personal Chief AI")

# CORS settings
origins = [
    "http://localhost:3000",
    "http://192.168.1.4:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 🔹 Create DB tables on startup (Phase 1 requirement)
Base.metadata.create_all(bind=engine)

# Include routers
app.include_router(chat_router, prefix="/api")

@app.get("/health")
def health():
    return {"status": "ok"}
