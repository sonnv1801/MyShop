import React, { useEffect } from 'react';
import '../App.css';
import BodyShop from '../components/shop/BodyShop';
import HeaderShop from '../components/shop/HeaderShop';
import AOS from 'aos';

export default function Shop() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <div className="wrap_shop" data-aos="fade-down">
      <HeaderShop />
      <BodyShop />
    </div>
  );
}
