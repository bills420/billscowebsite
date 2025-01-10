import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-deep-black text-pure-white py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-off-white">
          <section>
            <h2 className="text-2xl font-semibold text-pure-white mb-4">1. Information Collection</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Name and contact information</li>
              <li>Payment information</li>
              <li>Communication preferences</li>
              <li>Service usage data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pure-white mb-4">2. Use of Information</h2>
            <p>We use the collected information to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Provide and improve our services</li>
              <li>Process payments</li>
              <li>Send important notifications</li>
              <li>Respond to inquiries</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pure-white mb-4">3. Data Protection</h2>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pure-white mb-4">4. Contact Us</h2>
            <p>For privacy-related inquiries, please contact us at:</p>
            <p className="mt-2">Email: info@billsco.co.nz</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;