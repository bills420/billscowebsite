import React from 'react';

interface PaymentIconProps {
  icon: string;
  name: string;
}

const PaymentIcon: React.FC<PaymentIconProps> = ({ icon, name }) => (
  <div className="payment-icon group relative">
    <img 
      src={icon} 
      alt={`${name} payment method`}
      className="h-8 w-auto transition-transform duration-300 group-hover:scale-110"
    />
    <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-off-white">
      {name}
    </span>
  </div>
);

export default PaymentIcon;