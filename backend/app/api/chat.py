from fastapi import APIRouter
from app.schemas.chat import ChatRequest
from app.agent.graph import build_agent
from app.db.session import SessionLocal
from app.db.models import Message

router = APIRouter()
agent = build_agent()

@router.post("/chat")
def chat(req: ChatRequest):
    db = SessionLocal()

    # Save user message
    user_msg = Message(
        user_id="demo-user",
        role="user",
        content=req.message
    )
    db.add(user_msg)
    db.commit()

    # Agent response
    result = agent.invoke({"input": req.message})
    reply = result["output"]

    # Save agent message
    agent_msg = Message(
        user_id="demo-user",
        role="agent",
        content=reply
    )
    db.add(agent_msg)
    db.commit()

    db.close()

    return {"reply": reply}
