import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<
    { role: string; text: string }[]
  >([]);
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const askAI = async () => {
    if (!question.trim()) return;

    const userMessage = { role: "user", text: question };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();

      const aiMessage = {
        role: "ai",
        text: data.data?.answer || "No response",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "Server error" },
      ]);
    }

    setQuestion("");
    setLoading(false);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="container">
      <h2 className="title">🤖 QA Bot</h2>

      <div className="chat-box">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${
              msg.role === "user" ? "user" : "ai"
            }`}
          >
            <div className="bubble">{msg.text}</div>
          </div>
        ))}

        {loading && <div className="typing">AI is typing...</div>}

        <div ref={chatEndRef}></div>
      </div>

      <div className="input-box">
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !loading) askAI();
          }}
          placeholder="Ask something..."
        />

        <button onClick={askAI} disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
}

export default App;