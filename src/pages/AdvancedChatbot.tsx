import React, { useState, useEffect, useRef } from "react";
import { GoogleGenerativeAI, ChatSession } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";
import {
  FaPaperPlane,
  FaUserCircle,
  FaRobot,
  FaTimes,
  FaCommentDots,
} from "react-icons/fa";

interface Message {
  text: string;
  sender: "user" | "bot";
}

const AdvancedChatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [chat, setChat] = useState<ChatSession | null>(null);
  const [isOpen, setIsOpen] = useState(true); // To control chat visibility
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const systemPrompt = `
    You are a friendly and helpful chatbot for AK IT Solutions.
    Your goal is to provide excellent customer service and support.
    
    Company Information:
    - Name: AK IT Solutions
    - Contact: +91 9016452340
    - Email: sales@akitsol.com
    - Website: www.akitsol.com
    
    Services Offered:
    - Website Design & Development
    - Mobile App Development
    - Digital Marketing
    - SEO Services
    - Social Media Marketing
    - E-commerce Solutions
    
    Website Pages:
    - Home
    - About Us
    - Services
    - Portfolio
    - Blog
    - Contact Us
    
    Instructions:
    - Always be polite and professional.
    - If you don't know the answer, say "I'm sorry, I don't have that information, but I can connect you with a human who can help."
    - When asked about pricing, do not provide specific prices. Instead, encourage the user to schedule a free consultation for a custom quote. Respond with something like: "Our pricing is tailored to your project's specific needs. To get a customized quote, I recommend scheduling a free consultation with our experts. You can contact us at +91 9016452340 or email sales@akitsol.com to set that up."
    - Keep your answers concise and to the point.
    - Use the company information provided above to answer questions.
    `;

  useEffect(() => {
    const initChat = async () => {
      try {
        const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
        if (!apiKey) {
          throw new Error("API key not found");
        }
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
          model: "gemini-1.5-flash-latest",
        });

        const chatSession = model.startChat({
          history: [
            {
              role: "user",
              parts: [{ text: systemPrompt }],
            },
            {
              role: "model",
              parts: [
                {
                  text: "Hello! I'm the AK IT Solutions Assistant. How can I help you today?",
                },
              ],
            },
          ],
        });
        setChat(chatSession);
        setMessages([
          {
            text: "Hello! I'm the AK IT Solutions Assistant. How can I help you today?",
            sender: "bot",
          },
        ]);
      } catch (error) {
        console.error("Error initializing chat:", error);
        setMessages((prev) => [
          ...prev,
          {
            text: "Sorry, I'm having trouble connecting. Please try again later.",
            sender: "bot",
          },
        ]);
      }
    };
    initChat();
  }, [systemPrompt]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const getBotResponse = async (message: string) => {
    if (!chat) {
      throw new Error("Chat not initialized");
    }
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();
    return text;
  };

  const handleSend = async (message: string) => {
    if (!message.trim() || loading) return;

    const userMessage: Message = { text: message, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const botResponse = await getBotResponse(message);
      setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
    } catch (error) {
      console.error("Error getting bot response:", error);
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, I'm having trouble connecting. Please try again later.",
          sender: "bot",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // If chat is closed, show the launcher button
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-[#197aa4] text-white p-4 rounded-full shadow-2xl hover:bg-[#197aa4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#197aa4] transition-transform transform hover:scale-110 z-50"
        aria-label="Open chat"
      >
        <FaCommentDots className="text-3xl" />
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
      <div className="fixed bottom-4 right-4 w-96 h-[500px] bg-white rounded-lg shadow-2xl flex flex-col font-sans z-50 max-sm:w-72 max-sm:h-[400px]">
        <div className="bg-[#197aa4] text-white p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* <span><img src="/public/AK1-version-22.jpg" className="w-10 h-10 rounded-full" alt="" /></span> */}
            {/* <FaRobot className="mr-3 text-2xl" /> */}
            <h2 className="text-lg font-medium max-sm:text-xs">
              <span className="text-2xl max-sm:text-base">AK</span> IT Solutions Assistant
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-gray-200 focus:outline-none"
            aria-label="Close chat"
          >
            <FaTimes className="text-xl max-sm:text-lg hover:cursor-pointer" />
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
              } mb-4 animate-fade-in`}
            >
              {msg.sender === "bot" && (
                <FaRobot className="text-3xl mr-2 text-gray-400" />
              )}
              <div
                className={`rounded-lg px-4 py-2 max-w-xs shadow-md ${
                  msg.sender === "user"
                    ? "bg-[#197aa4] text-white rounded-br-none"
                    : "bg-gray-200 text-gray-800 rounded-bl-none"
                }`}
              >
                {msg.sender === "bot" ? (
                  <div className="prose prose-sm">
                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                  </div>
                ) : (
                  msg.text
                )}
              </div>
              {msg.sender === "user" && (
                <FaUserCircle className="text-3xl ml-2 text-[#197aa4]" />
              )}
            </div>
          ))}
          {loading && (
            <div className="flex items-end justify-start mb-4 animate-fade-in">
              <FaRobot className="text-3xl mr-2 text-gray-400" />
              <div className="rounded-lg px-4 py-3 bg-gray-200 text-gray-800 rounded-bl-none shadow-md ">
                <div className="flex items-center justify-center">
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="p-4 border-t bg-white">
          <div className="flex space-x-2">
            <input
              type="text"
              className="flex-1 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#197aa4]"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend(input)}
              placeholder="Type a message..."
            />
            <button
              className="bg-[#197aa4] text-white px-4 rounded-lg hover:bg-[#197aa4] transition-colors disabled:bg-[#197aa4]"
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