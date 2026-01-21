"use client";

import { useState } from "react";
import ChatBox from "../components/ChatBox";

export default function ChatPage() {
  const [messages, setMessages] = useState<
    { role: string; content: string }[]
  >([]);

  function addMessage(role: string, content: string) {
    setMessages((prev) => [...prev, { role, content }]);
  }

  return (
    <div className="flex flex-col h-screen max-w-3xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-2">
        Chat with your Chief
      </h2>

      <div className="flex-1 overflow-y-auto border rounded p-4 mb-4 bg-white">
        {messages.map((m, i) => (
          <p key={i} className="mb-2">
            <strong>{m.role}:</strong> {m.content}
          </p>
        ))}
      </div>

      <ChatBox addMessage={addMessage} />
    </div>
  );
}
