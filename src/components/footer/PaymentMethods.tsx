import React from 'react';
import PaymentIcon from './PaymentIcon';

const paymentMethods = [
  {
    name: 'Visa',
    icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/visa.svg'
  },
  {
    name: 'Bitcoin',
    icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/bitcoin.svg'
  },
  {
    name: 'Mastercard',
    icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/mastercard.svg'
  },
  {
    name: 'PayPal',
    icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/paypal.svg'
  }
];

const PaymentMethods = () => (
  <div className="payment-methods">
    <h3 className="text-lg font-semibold mb-4">Accepted Payment Methods</h3>
    <div className="flex space-x-6 items-center">
      {paymentMethods.map((method) => (
        <PaymentIcon 
          key={method.name}
          icon={method.icon}
          name={method.name}
        />
      ))}
    </div>
  </div>
);

export default PaymentMethods;