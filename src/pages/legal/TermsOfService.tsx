import React from 'react';

const TermsOfService = () => {
  return (
    <div className="bg-deep-black text-pure-white py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="space-y-6 text-off-white">
          <section>
            <h2 className="text-2xl font-semibold text-pure-white mb-4">1. Agreement to Terms</h2>
            <p>By accessing our services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pure-white mb-4">2. Service Description</h2>
            <p>Bills Co. provides various services including:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Web Development</li>
              <li>Music Production</li>
              <li>Labour Services</li>
              <li>Beautification Services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pure-white mb-4">3. Payment Terms</h2>
            <div className="space-y-4">
              <div className="bg-matte-black p-4 rounded-lg border border-gray-800">
                <h3 className="text-lg font-semibold text-pure-white mb-2">3.1 Upfront Payment Requirement</h3>
                <p>A 50% upfront payment is required for all services before work commences. This payment:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Secures your project slot in our schedule</li>
                  <li>Covers initial resource allocation and planning</li>
                  <li>Is non-refundable once work has begun</li>
                </ul>
              </div>
              
              <div className="bg-matte-black p-4 rounded-lg border border-gray-800">
                <h3 className="text-lg font-semibold text-pure-white mb-2">3.2 Payment Schedule</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>50% upfront payment before project initiation</li>
                  <li>Remaining 50% upon project completion or as specified in the service agreement</li>
                  <li>Additional costs must be approved and paid before implementation</li>
                </ul>
              </div>

              <p>We accept various payment methods including credit cards and cryptocurrency. Specific payment details will be provided in your service agreement.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pure-white mb-4">4. Project Timeline</h2>
            <p>Project timelines begin upon receipt of the upfront payment and all required materials. Delays in providing materials or feedback may affect project completion dates.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pure-white mb-4">5. Liability</h2>
            <p>Bills Co. shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pure-white mb-4">6. Cancellation</h2>
            <p>Project cancellation after the upfront payment may result in forfeiture of the payment, depending on the work already completed.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pure-white mb-4">7. Contact</h2>
            <p>For any questions regarding these terms, please contact us at:</p>
            <p className="mt-2">Email: info@billsco.co.nz</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;