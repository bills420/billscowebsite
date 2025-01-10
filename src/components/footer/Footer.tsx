import React from 'react';
import PaymentMethods from './PaymentMethods';
import FooterLinks from './FooterLinks';
import NewsletterSignup from '../common/NewsletterSignup';
import { COMPANY_INFO } from '../../utils/constants';

const Footer = () => {
  return (
    <footer className="bg-matte-black text-pure-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <FooterLinks />
          <div className="space-y-8">
            <PaymentMethods />
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-off-white">{COMPANY_INFO.email}</p>
              <p className="text-off-white">{COMPANY_INFO.phone}</p>
              <p className="text-off-white">{COMPANY_INFO.address}</p>
            </div>
          </div>
          <div>
            <NewsletterSignup />
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-off-white text-sm">
              © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="/privacy-policy" className="text-sm text-off-white hover:text-pure-white">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-sm text-off-white hover:text-pure-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;