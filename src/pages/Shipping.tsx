import React from "react";
import { Truck } from "lucide-react";

const Shipping: React.FC = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <Truck className="mx-auto h-16 w-16 text-primary" />
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Shipping & Delivery Policy
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Last updated on Nov 5th 2025
          </p>
        </div>

        <main className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <section>
              <p className="text-muted-foreground">
                For International buyers, orders are shipped and delivered through registered international courier companies and/or International speed post only. For domestic buyers, orders are shipped through registered domestic courier companies and /or speed post only. Orders are shipped within 0-7 days or as per the delivery date agreed at the time of order confirmation and delivering of the shipment subject to Courier Company / post office norms. AK IT Solutions is not liable for any delay in delivery by the courier company / postal authorities and only guarantees to hand over the consignment to the courier company or postal authorities within 0-7 days from the date of the order and payment or as per the delivery date agreed at the time of order confirmation. Delivery of all orders will be to the address provided by the buyer. Delivery of our services will be confirmed on your mail ID as specified during registration. For any issues in utilizing our services you may contact our helpdesk on <strong>7990474629</strong> or <strong>sales@akitsol.com</strong>.
              </p>
            </section>

            <section className="bg-secondary rounded-lg p-6">
              <h2 className="text-2xl font-bold text-primary mb-4">Disclaimer</h2>
              <p className="text-muted-foreground">
                The above content is created at AK IT Solutions's sole discretion. Razorpay shall not be liable for any content provided here and shall not be responsible for any claims and liability that may arise due to merchant’s non-adherence to it.
              </p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Shipping;