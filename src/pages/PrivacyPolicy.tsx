import React from "react";
import { ShieldCheck } from "lucide-react";

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "how-we-use-information", title: "How We Use Your Information" },
  { id: "information-sharing", title: "Information Sharing" },
  { id: "data-security", title: "Data Security" },
  { id: "cookies", title: "Cookies and Tracking" },
  { id: "your-rights", title: "Your Rights" },
  { id: "contact-us", title: "Contact Us" },
];

const PrivacyPolicy: React.FC = () => {
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
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Last Updated: 11/10/2020
            {/* Last Updated: {new Date().toLocaleDateString()} */}
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
                  Welcome to AK IT Solution's ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
                </p>
                <p className="text-muted-foreground mt-4">
                  By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this privacy policy, please do not access the site.
                </p>
              </section>

              <section id="information-we-collect">
                <h2 className="text-2xl font-bold text-primary mb-4">Information We Collect</h2>
                <p className="text-muted-foreground">We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
                <ul className="list-disc list-inside space-y-2 pl-4 mt-4 text-muted-foreground">
                  <li>
                    <strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.
                  </li>
                  <li>
                    <strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
                  </li>
                  <li>
                    <strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, or exchange services from the Site.
                  </li>
                </ul>
              </section>

              <section id="how-we-use-information">
                <h2 className="text-2xl font-bold text-primary mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
                <ul className="list-disc list-inside space-y-2 pl-4 mt-4 text-muted-foreground">
                    <li>Create and manage your account.</li>
                    <li>Process your transactions and send you related information, including purchase confirmations and invoices.</li>
                    <li>Email you regarding your account or order.</li>
                    <li>Improve our website and offerings.</li>
                    <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
                    <li>Notify you of updates to the Site.</li>
                    <li>Offer new products, services, and/or recommendations to you.</li>
                </ul>
              </section>

              <section id="information-sharing">
                <h2 className="text-2xl font-bold text-primary mb-4">Information Sharing and Disclosure</h2>
                <p className="text-muted-foreground">We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.</p>
                <p className="text-muted-foreground mt-4">We may also release information when it's release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property or safety.</p>
              </section>

              <section id="data-security">
                <h2 className="text-2xl font-bold text-primary mb-4">Data Security</h2>
                <p className="text-muted-foreground">
                  We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                </p>
              </section>

              <section id="cookies">
                <h2 className="text-2xl font-bold text-primary mb-4">Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground">
                  We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience. When you access the Site, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Site.
                </p>
              </section>

              <section id="your-rights">
                <h2 className="text-2xl font-bold text-primary mb-4">Your Rights</h2>
                <p className="text-muted-foreground">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 pl-4 mt-4 text-muted-foreground">
                  <li>Request access to the personal data we hold about you.</li>
                  <li>Request correction of any incorrect or incomplete data.</li>
                  <li>Request deletion of your personal data.</li>
                  <li>Object to our processing of your personal data.</li>
                </ul>
                <p className="text-muted-foreground mt-4">To exercise these rights, please contact us using the contact information provided below.</p>
              </section>

              <section id="contact-us" className="bg-secondary rounded-lg p-6">
                <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions or comments about this Privacy Policy, please contact us at:
                </p>
                <p className="font-semibold text-muted-foreground mt-4">AK IT Solution's</p>
                <p className="text-muted-foreground">
                  Email: <a href="mailto:sales@akitsol.com" className="text-primary hover:underline">sales@akitsol.com</a>
                </p>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;