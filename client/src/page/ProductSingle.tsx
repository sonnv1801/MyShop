import React from 'react';
import { NavProduct } from '../components/productSingle/NavProduct';
import { Product } from '../components/productSingle/Product';
import '../components/productSingle/ProductSingle.css';

export const ProductSingle = () => {
  return (
    <div className="product-single">
      <NavProduct />
      <Product />
    </div>
  );
};
