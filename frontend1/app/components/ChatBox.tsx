"use client";

import { useState } from "react";
import { sendMessage } from "../lib/api";


export default function ChatBox({
  addMessage,
}: {
  addMessage: (role: string, content: string) => void;
}) {
  const [input, setInput] = useState("");

  async function handleSend() {
    if (!input.trim()) return;

    addMessage("user", input);

    const reply = await sendMessage(input);
    addMessage("agent", reply);

    setInput("");
  }

  return (
    <div className="flex gap-2">
      <input
        className="flex-1 border rounded px-3 py-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask your chief..."
      />
      <button
        onClick={handleSend}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Send
      </button>
    </div>
  );
}
