from typing import TypedDict
from langgraph.graph import StateGraph

# Define the state the agent carries
class AgentState(TypedDict):
    input: str
    output: str

# Define a node (agent logic)
def chat_node(state: AgentState):
    user_input = state["input"]
    return {
        "output": f'Agent received: "{user_input}"'
    }

# Build and compile the graph
def build_agent():
    graph = StateGraph(AgentState)
    graph.add_node("chat", chat_node)
    graph.set_entry_point("chat")
    graph.set_finish_point("chat")
    return graph.compile()
