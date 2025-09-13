import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "919016452340"; // ✅ Your WhatsApp number (no + sign)
  const message = "Hello! I’d like to know more about your services.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 max-sm:bottom-1 max-sm:left-1 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition transform hover:scale-110 z-50"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-5 h-5" /> {/* ✅ Real WhatsApp Icon */}
    </a>
  );
};

export default WhatsAppButton;
