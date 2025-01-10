import React from 'react';

const Copyright = () => {
  return (
    <div className="bg-deep-black text-pure-white py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Copyright Notice</h1>
        <div className="space-y-6 text-off-white">
          <section>
            <h2 className="text-2xl font-semibold text-pure-white mb-4">1. Ownership Declaration</h2>
            <p>Bills Co. and all associated intellectual property, including but not limited to the website, brand name, logo, and content, are the sole property of:</p>
            <div className="bg-matte-black p-4 rounded-lg mt-2">
              <p className="font-semibold text-pure-white">Billy Joel Salcedo Chintes</p>
              <p>Founder and Owner</p>
              <p>Bills Co.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pure-white mb-4">2. Copyright Protection</h2>
            <p>All rights reserved. No part of this website or company materials may be reproduced, distributed, or transmitted in any form or by any means without the prior written permission of Billy Joel Salcedo Chintes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pure-white mb-4">3. Trademark Rights</h2>
            <p>The Bills Co. name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Billy Joel Salcedo Chintes or its affiliates.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pure-white mb-4">4. Contact Information</h2>
            <p>For copyright and trademark inquiries:</p>
            <p className="mt-2">Email: info@billsco.co.nz</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Copyright;