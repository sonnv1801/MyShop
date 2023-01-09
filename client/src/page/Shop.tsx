import React from 'react';
import '../App.css'
import BodyShop from '../components/shop/BodyShop';
import HeaderShop from '../components/shop/HeaderShop';

export default function Shop() {
    return (
        <div className='wrap_shop'>
            <HeaderShop />
            <BodyShop />
        </div>
    )
}
