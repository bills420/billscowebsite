import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../../utils/constants';

const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors duration-300 z-50"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;