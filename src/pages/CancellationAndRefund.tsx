import React from "react";
import { RotateCw } from "lucide-react";

const CancellationAndRefund: React.FC = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <RotateCw className="mx-auto h-16 w-16 text-primary" />
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Cancellation & Refund Policy
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Last updated on Nov 5th 2025
          </p>
        </div>

        <main className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <section>
              <p className="text-muted-foreground">
                AK IT Solutions believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Cancellations will be considered only if the request is made within Same day of placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.</li>
                <li>AK IT Solutions does not accept cancellation requests for perishable items like flowers, eatables etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.</li>
                <li>In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within Same day of receipt of the products.</li>
                <li>In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within Same day of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.</li>
                <li>In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them.</li>
                <li>In case of any Refunds approved by the AK IT Solutions, it’ll take 1-2 days for the refund to be processed to the end customer.</li>
              </ul>
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

export default CancellationAndRefund;