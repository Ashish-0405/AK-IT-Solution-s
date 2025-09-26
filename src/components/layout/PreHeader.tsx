import { Mail, Phone } from "lucide-react";

const PreHeader = () => {
  const items = [
    "Welcome to AK IT Solution's",
    "Your Trusted Partner for Innovative IT Solutions",
    "Contact us for a free consultation!",
    "Expert Web & Mobile App Development",
    "ERP Software, Cloud Solutions & CRM Software",
    "Digital Marketing & AI Integration"
  ];

  const scrollingText = items.join("  •  ");

  return (
    <>
      <style>
        {`
          @keyframes blink {
            50% {
              opacity: 0;
            }
          }

          .animate-blink {
            animation: blink 3s ease-in-out infinite;
          }

          @keyframes scroll-horizontal {
            from {
              transform: translateX(0%);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .scroll-container {
            overflow: hidden;
            white-space: nowrap;
          }

          .scroll-content {
            display: inline-block;
            animation: scroll-horizontal 30s linear infinite;
            padding-right: 100%;
          }
        `}
      </style>
      <div className="bg-primary text-white text-xs py-3 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="scroll-container flex-grow mr-4">
            <div className="scroll-content">
              <span>{scrollingText}</span>
              <span className="ml-16">{scrollingText}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 flex-shrink-0">
            <div className="flex items-center space-x-1">
              <a href="tel:+919016452340" className="flex text-sm hover:text-primary-foreground">
                <Phone size={20} className="animate-blink" />
                <span className="animate-blink max-sm:hidden font-semibold ml-2">+91 9016452340</span>
              </a>
            </div>
            <div className="flex items-center space-x-1">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@akitsol.com&su=Support%20Request&body=Hello%2C%0D%0A"
                className="text-sm flex hover:text-gray-300"
              >
                <Mail size={20} className="animate-blink" />
                <span className="animate-blink max-sm:hidden font-semibold ml-2">sales@akitsol.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreHeader;