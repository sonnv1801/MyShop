import React from 'react';
import { PaymentProduct } from '../components/payment/PaymentProduct';
import '../components/payment/Payment.css';

export const Payment = () => {
  return (
    <div style={{ marginTop: '100px' }}>
      <PaymentProduct />
    </div>
  );
};
