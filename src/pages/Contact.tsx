import React from 'react';
import ContactForm from '../components/common/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../utils/constants';

const Contact = () => {
  return (
    <div className="bg-deep-black text-pure-white py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3" />
                <span>{COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3" />
                <span>{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>
            <ContactForm />
          </div>
          
          <div className="bg-matte-black p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Business Hours</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>{COMPANY_INFO.businessHours.weekdays}</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>{COMPANY_INFO.businessHours.saturday}</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>{COMPANY_INFO.businessHours.sunday}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;