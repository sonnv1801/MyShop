import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

export const NavCart = () => {
  return (
    <nav className="nav-cart md-nav-cart sm-nav-cart">
      <h1>Shopping Cart</h1>
      <div className="nav-body-cart sm-none-nav">
        <i>
          <AiOutlineRight />
        </i>
        <h1>CheckOut Details</h1>
        <i>
          <AiOutlineRight />
        </i>
        <h1>Order Complete</h1>
      </div>
    </nav>
  );
};
