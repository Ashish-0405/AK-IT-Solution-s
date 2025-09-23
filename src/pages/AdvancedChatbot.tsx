import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import {
  FaPaperPlane,
  FaUserCircle,
  FaRobot,
  FaTimes,
  FaCommentDots,
} from "react-icons/fa";
import { knowledgeBase } from "./knowledgeBase";

interface Message {
  text: string;
  sender: "user" | "bot";
}

const AdvancedChatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(true); // To control chat visibility
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([
      {
        text: "Hello! I'm the AK IT Solutions Assistant. How can I help you today?",
        sender: "bot",
      },
    ]);
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const getBotResponse = (message: string): string => {
    const lowerCaseMessage = message.toLowerCase().trim();

    for (const key in knowledgeBase) {
      if (Object.prototype.hasOwnProperty.call(knowledgeBase, key) && key !== 'default') {
        const entry = knowledgeBase[key];
        if (entry.keywords.some(keyword => lowerCaseMessage.includes(keyword.toLowerCase()))) {
          return entry.response;
        }
      }
    }

    return knowledgeBase.default.response;
  };

  const handleSend = (message: string) => {
    if (!message.trim() || loading) return;

    const userMessage: Message = { text: message, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      const botResponse = getBotResponse(message);
      setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
      setLoading(false);
    }, 500);
  };

  // If chat is closed, show the launcher button
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 max-sm:bottom-1 max-sm:right-1 bg-[#197aa4] text-white p-3 rounded-full shadow-2xl hover:bg-[#197aa4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#197aa4] transition-transform transform hover:scale-110 z-50"
        aria-label="Open chat"
      >
        <FaCommentDots className="text-3xl"/>
      </button>
    );
  }

  // If chat is open, show the full chat window
  return (
    <>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-in-out;
        }
        .typing-dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          background-color: #4b5563;
          border-radius: 50%;
          margin: 0 2px;
          animation: typing-blink 1.4s infinite both;
        }
        .typing-dot:nth-child(2) {
          animation-delay: 0.2s;
        }
        .typing-dot:nth-child(3) {
          animation-delay: 0.4s;
        }
        @keyframes typing-blink {
          0% { opacity: 0.2; }
          20% { opacity: 1; }
          100% { opacity: 0.2; }
        }
      `}</style>
      <div className="fixed bottom-4 right-4 w-96 h-[450px] bg-white rounded-lg shadow-2xl flex flex-col font-sans z-50 max-sm:w-72 max-sm:h-[400px]">
        <div className="bg-[#197aa4] text-white p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h2 className="text-lg font-medium max-sm:text-xs">
              <span className="text-2xl max-sm:text-base">AK</span> IT Solutions Assistant
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-gray-200 focus:outline-none"
            aria-label="Close chat"
          >
            <FaTimes className="text-xl max-sm:text-lg hover:cursor-pointer"/>
          </button>
        </div>
        <div
          className="flex-1 p-4 overflow-y-auto bg-gray-50"
          ref={chatContainerRef}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-end ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              } mb-2 animate-fade-in `}
            >
              {msg.sender === "bot" && (
                <FaRobot className="text-3xl mr-2 text-gray-400" />
              )}
              <div
                className={`rounded-lg px-3 py-1 max-w-xs shadow-md ${
                  msg.sender === "user"
                    ? "bg-[#197aa4] text-white rounded-br-none max-sm:text-xs font-medium"
                    : "bg-gray-200 text-gray-800 rounded-bl-none"
                }`}
              >
                {msg.sender === "bot" ? (
                  <div className="prose prose-sm text-sm font-medium max-sm:text-xs">
                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                  </div>
                ) : (
                  msg.text
                )}
              </div>
              {msg.sender === "user" && (
                <FaUserCircle className="text-xl ml-1 text-[#197aa4] max-sm:text-base" />
              )}
            </div>
          ))}
          {loading && (
            <div className="flex items-end justify-start mb-4 animate-fade-in">
              <FaRobot className="text-3xl mr-2 text-gray-400" />
              <div className="rounded-lg px-3 py-2 bg-gray-200 text-gray-800 rounded-bl-none shadow-md">
                <div className="flex items-center justify-center">
                  <span className="typing-dot max-sm:text-xs"></span>
                  <span className="typing-dot max-sm:text-xs"></span>
                  <span className="typing-dot max-sm:text-xs"></span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="p-2 border-t bg-white">
          <div className="flex items-center space-x-2">
            <input
              type="text"
             className="flex-1 min-w-0 font-medium border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#197aa4] max-sm:text-xs"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend(input)}
              placeholder="Type a message..."
            />
           <button
              className="flex-shrink-0 bg-[#197aa4] text-white px-4 py-3 rounded-lg hover:bg-[#197aa4] transition-colors disabled:bg-[#197aa4] btn-3d btn-cyber"
              onClick={() => handleSend(input)}
              disabled={loading || !input.trim()}
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvancedChatbot;