"use client";

import { useEffect, useRef, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

function MessageContent({ content }: { content: string }) {
  const lines = content.split("\n");

  return (
    <div className="space-y-3">
      {lines.map((line, index) => {
        const trimmedLine = line.trim();

        if (!trimmedLine) {
          return <div key={index} className="h-2" />;
        }

        if (trimmedLine.startsWith("#")) {
          return (
            <h3
              key={index}
              className="text-2xl font-bold text-[#1E3A5F] mt-5 mb-2"
            >
              {trimmedLine.replace(/^#+\s*/, "")}
            </h3>
          );
        }

        const parts = trimmedLine.split(/(\[[^\]]+\]\([^)]+\))/g);

        return (
          <p key={index} className="leading-8">
            {parts.map((part, partIndex) => {
              const match = part.match(/\[([^\]]+)\]\(([^)]+)\)/);

              if (match) {
                return (
                  <a
                    key={partIndex}
                    href={match[2]}
                    className="text-[#4B9CD3] font-bold underline"
                  >
                    {match[1]}
                  </a>
                );
              }

              return <span key={partIndex}>{part}</span>;
            })}
          </p>
        );
      })}
    </div>
  );
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hey, I’m Iris. Tell me what you’ve been noticing, and I’ll help you organize your concerns, ask thoughtful questions, and think through possible next steps.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const starterPrompts = [
    "My child struggles with reading.",
    "My child gets overwhelmed easily.",
    "My child has trouble communicating.",
    "My child has big emotional reactions.",
    "My child struggles socially.",
  ];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(messageText?: string) {
    const textToSend = messageText || input;

    if (!textToSend.trim() || loading) return;

    const userMessage: Message = {
      role: "user",
      content: textToSend,
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages.map((message) => ({
            role: message.role,
            content: message.content,
          })),
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again.",
        },
      ]);
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-white text-black font-serif px-8 py-8">
      <a href="/" className="text-[#4B9CD3] text-lg font-bold">
        ← Back home
      </a>

      <section className="max-w-5xl mx-auto mt-10">
        <div className="mb-8">
          <p className="uppercase tracking-widest text-[#1E3A5F] text-lg font-bold mb-3">
            Talk with Iris
          </p>

          <h1 className="text-6xl font-bold text-[#5b3e31] mb-4">
            Start with what you’re noticing.
          </h1>

          <p className="text-xl leading-8 text-[#1E3A5F]/80 max-w-3xl">
            Iris will ask early questions, then help organize patterns, offer
            support ideas, and connect you with helpful resources.
          </p>
        </div>

        <div className="mb-6 rounded-[2rem] bg-[#4B9CD3]/10 border border-[#4B9CD3]/25 p-6">
          <p className="text-xl font-bold text-[#1E3A5F] mb-4">
            Not sure how to start?
          </p>

          <div className="flex flex-wrap gap-3">
            {starterPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => sendMessage(prompt)}
                className="rounded-full bg-white border border-[#4B9CD3]/30 px-5 py-3 text-[#1E3A5F] font-bold hover:border-[#4B9CD3] hover:shadow-sm"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        <div className="border border-[#4B9CD3]/30 rounded-[2rem] p-6 h-[560px] overflow-y-auto mb-6 bg-white shadow-lg">
          <div className="space-y-6">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-6 rounded-3xl max-w-[85%] leading-8 whitespace-pre-wrap ${
                  message.role === "user"
                    ? "bg-[#4B9CD3] text-white ml-auto"
                    : "bg-[#f8f6f4] text-black border border-black/5"
                }`}
              >
                <MessageContent content={message.content} />
              </div>
            ))}

            {loading && (
              <div className="bg-[#f8f6f4] text-[#1E3A5F] p-6 rounded-3xl max-w-[85%] border border-black/5">
                <span className="font-bold">Iris is thinking</span>
                <span className="animate-pulse">...</span>
              </div>
            )}

            <div ref={bottomRef} />
          </div>
        </div>

        <div className="flex gap-4">
          <input
            className="flex-1 border border-[#4B9CD3]/40 rounded-full px-6 py-4 text-lg outline-none focus:border-[#4B9CD3]"
            placeholder="Type what you’re noticing..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
          />

          <button
            onClick={() => sendMessage()}
            disabled={loading}
            className="bg-[#4B9CD3] text-white px-8 py-4 rounded-full text-lg font-bold disabled:opacity-50"
          >
            Send
          </button>
        </div>

        <p className="text-sm text-black/55 mt-5 leading-6 max-w-3xl">
          Iris provides educational support and does not diagnose or replace
          professional care. If your child is in immediate danger, call 911 or
          emergency services.
        </p>
      </section>
    </main>
  );
}