export const knowledgeBase = {
  greetings: {
    keywords: ["hello", "hi", "hey"],
    response:'Hello! I\'m the AK IT Solutions assistant. I can help you with information about our Web Development, Mobile App Development, AI Integration, Cloud Solutions as well as ERP Software. How can I assist you today?',

  },
  services: {
    keywords: ["service", "what do you do", "offer"],
    response:
      "We offer a range of services including I can help you with information about our Web Development, Mobile App Development, AI Integration, Cloud Solutions as well as ERP Software. How can I assist you today?. Which one are you interested in?",
  },
  "web development": {
    keywords: ["web", "website"],
    response:
      "We build custom web applications using modern technologies. You can find more details on our '/services/web-development' page.",
  },
  "mobile app development": {
    keywords: ["mobile", "app"],
    response:
      "We create native and cross-platform mobile apps for iOS and Android. Check out the '/services/mobile-app-development' page for more.",
  },
  "cloud solutions": {
    keywords: ["cloud", "aws", "azure"],
    response:
      "We provide cloud infrastructure, migration, and DevOps solutions. More information is available at '/services/cloud-solutions'.",
  },
  "crm software": {
    keywords: ["crm", "customer relationship"],
    response:
      "We build custom CRM software to streamline your business processes. See '/services/crm-software' for details.",
  },
  contact: {
    keywords: ["contact", "phone", "email", "address"],
    response:
      "You can reach us at: \n- Email: info@akitsolutions.com \n- Phone: +1 (234) 567-890. \nOr visit our contact page at '/contact'.",
  },
  portfolio: {
    keywords: ["work", "project", "portfolio"],
    response: "You can see our past projects on the '/portfolio' page.",
  },
  about: {
    keywords: ["about", "company", "mission"],
    response: "You can learn more about our company on the '/about' page.",
  },
  quote: {
    keywords: ["quote", "price", "cost"],
    response: "To get a personalized quote, please visit our '/get-quote' page.",
  },
  default: {
    response:
      "I'm sorry, I don't have information on that. Can you please rephrase? You can also ask me about our services, contact details, or how to get a quote.",
  },
};