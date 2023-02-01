import React from 'react';
import { NavCart } from '../components/cart/NavCart';
import '../components/cart/Cart.css';
import { CartProduct } from '../components/cart/CartProduct';

export const Cart = () => {
  return (
    <div style={{ marginTop: '100px' }}>
      <NavCart />
      <CartProduct />
    </div>
  );
};
