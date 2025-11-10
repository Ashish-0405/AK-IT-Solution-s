import React from "react";
import { ShieldCheck } from "lucide-react";

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "user-agreement", title: "User Agreement" },
  { id: "accuracy-of-information", title: "Accuracy of Information" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "prohibited-use", title: "Prohibited Use" },
  { id: "external-links", title: "External Links" },
  { id: "disputes", title: "Disputes & Governing Law" },
  { id: "liability", title: "Liability & Transactions" },
  { id: "disclaimer", title: "Disclaimer" },
];

const TermsAndConditions: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <ShieldCheck className="mx-auto h-16 w-16 text-primary" />
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Last Updated: November 5, 2020
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          <aside className="lg:col-span-3 lg:sticky lg:top-24 self-start">
            <nav className="space-y-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="block cursor-pointer rounded-lg px-4 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          <main className="lg:col-span-9 mt-12 lg:mt-0">
            <div className="space-y-12">
              <section id="introduction">
                <h2 className="text-2xl font-bold text-primary mb-4">Introduction</h2>
                <p className="text-muted-foreground">
                  For the purpose of these Terms and Conditions, the term "we", "us", "our" shall mean <strong>AK IT Solutions</strong>, with its registered office at SHOP NO. 306, GOLDEN SQUARE, Nikol, Ahmedabad, Gujarat, 382350. The terms "you", "your", "user" refer to any person visiting our website or purchasing our services.
                </p>
              </section>

              <section id="user-agreement">
                <h2 className="text-2xl font-bold text-primary mb-4">User Agreement</h2>
                <p className="text-muted-foreground">
                  Your use of this website and our services is governed by these Terms and Conditions. The content herein is subject to change without notice.
                </p>
              </section>

              <section id="accuracy-of-information">
                <h2 className="text-2xl font-bold text-primary mb-4">Accuracy of Information</h2>
                <p className="text-muted-foreground">
                  We do not provide any warranty or guarantee as to the accuracy, timeliness, or suitability of the information on this website. You acknowledge that such information may contain inaccuracies, and we exclude liability for any such errors to the fullest extent permitted by law.
                </p>
              </section>

              <section id="intellectual-property">
                <h2 className="text-2xl font-bold text-primary mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground">
                  This website contains material owned by or licensed to us, including the design, layout, and graphics. Reproduction is prohibited without prior written consent. All trademarks not owned by us are acknowledged.
                </p>
              </section>

              <section id="prohibited-use">
                <h2 className="text-2xl font-bold text-primary mb-4">Prohibited Use</h2>
                <p className="text-muted-foreground">
                  Unauthorized use of this website or its content may give rise to a claim for damages and/or be a criminal offense.
                </p>
              </section>

              <section id="external-links">
                <h2 className="text-2xl font-bold text-primary mb-4">External Links</h2>
                <p className="text-muted-foreground">
                  This website may include links to other websites for your convenience. We do not endorse these websites and are not responsible for their content.
                </p>
              </section>

              <section id="disputes">
                <h2 className="text-2xl font-bold text-primary mb-4">Disputes & Governing Law</h2>
                <p className="text-muted-foreground">
                  Any dispute arising from your use of this website or our services is subject to the laws of India.
                </p>
              </section>

              <section id="liability">
                <h2 className="text-2xl font-bold text-primary mb-4">Liability & Transactions</h2>
                <p className="text-muted-foreground">
                  We shall not be liable for any loss or damage arising from the decline of authorization for any transaction due to exceeding preset limits agreed upon with our acquiring bank.
                </p>
              </section>

              <section id="disclaimer" className="bg-secondary rounded-lg p-6">
                <h2 className="text-2xl font-bold text-primary mb-4">Disclaimer</h2>
                <p className="text-muted-foreground">
                  The content of these terms is at the sole discretion of <strong>AK IT Solutions</strong>. Razorpay is not liable for any content provided here and is not responsible for any claims or liability that may arise from a merchant's non-adherence to it.
                </p>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;