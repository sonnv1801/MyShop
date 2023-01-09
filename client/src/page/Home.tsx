import React from 'react';
import Banner from '../components/home/Banner';
// import BodyHome from '../components/home/BodyHome';
import { Deal } from '../components/home/Deal';
import HeaderHome from '../components/home/HeaderHome';
import ProductHome from '../components/home/ProductHome';
import { ServiceHome } from '../components/home/ServiceHome';
import { TitleHome } from '../components/home/TitleHome';
import Seketon from '../components/Seketon';
import BoltIcon from '@mui/icons-material/Bolt';
import { DealSoon } from '../components/home/DealSoon';
import { BrandArea } from '../components/home/BrandArea';

import './Page.css';

const titleHome = {
  id: 1,
  title: 'Hot Deal',
  icon: <BoltIcon />,
};

const titleHome1 = {
  id: 1,
  title: 'Hot Deal 1',
  icon: <BoltIcon />,
};

const products = [
  {
    id: 1,
    name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON',
    price: '$150.00',
    oldprice: '$250.00',
    imgPath:
      'https://preview.colorlib.com/theme/karma/img/product/xp1.jpg.pagespeed.ic.560ZlxqBFw.webp',
  },
  {
    id: 2,
    name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON',
    price: '$150.00',
    oldprice: '$250.00',
    imgPath:
      'https://preview.colorlib.com/theme/karma/img/product/xp1.jpg.pagespeed.ic.560ZlxqBFw.webp',
  },
  {
    id: 3,
    name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON',
    price: '$150.00',
    oldprice: '$250.00',
    imgPath:
      'https://preview.colorlib.com/theme/karma/img/product/xp1.jpg.pagespeed.ic.560ZlxqBFw.webp',
  },
  {
    id: 4,
    name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON',
    price: '$150.00',
    oldprice: '$250.00',
    imgPath:
      'https://preview.colorlib.com/theme/karma/img/product/xp1.jpg.pagespeed.ic.560ZlxqBFw.webp',
  },
  {
    id: 5,
    name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON',
    price: '$150.00',
    oldprice: '$250.00',
    imgPath:
      'https://preview.colorlib.com/theme/karma/img/product/xp1.jpg.pagespeed.ic.560ZlxqBFw.webp',
  },
  {
    id: 6,
    name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON',
    price: '$150.00',
    oldprice: '$250.00',
    imgPath:
      'https://preview.colorlib.com/theme/karma/img/product/xp1.jpg.pagespeed.ic.560ZlxqBFw.webp',
  },
];

const products1 = [
  {
    id: 1,
    name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON',
    price: '$150.00',
    oldprice: '$250.00',
    imgPath:
      'https://preview.colorlib.com/theme/karma/img/product/xp1.jpg.pagespeed.ic.560ZlxqBFw.webp',
  },
  {
    id: 2,
    name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON',
    price: '$150.00',
    oldprice: '$250.00',
    imgPath:
      'https://preview.colorlib.com/theme/karma/img/product/xp1.jpg.pagespeed.ic.560ZlxqBFw.webp',
  },
  {
    id: 3,
    name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON',
    price: '$150.00',
    oldprice: '$250.00',
    imgPath:
      'https://preview.colorlib.com/theme/karma/img/product/xp1.jpg.pagespeed.ic.560ZlxqBFw.webp',
  },
  {
    id: 4,
    name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON',
    price: '$150.00',
    oldprice: '$250.00',
    imgPath:
      'https://preview.colorlib.com/theme/karma/img/product/xp1.jpg.pagespeed.ic.560ZlxqBFw.webp',
  },
  {
    id: 5,
    name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON',
    price: '$150.00',
    oldprice: '$250.00',
    imgPath:
      'https://preview.colorlib.com/theme/karma/img/product/xp1.jpg.pagespeed.ic.560ZlxqBFw.webp',
  },
  {
    id: 6,
    name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON',
    price: '$150.00',
    oldprice: '$250.00',
    imgPath:
      'https://preview.colorlib.com/theme/karma/img/product/xp1.jpg.pagespeed.ic.560ZlxqBFw.webp',
  },
];

export default function Home() {
  return (
    <div className="">
      <Banner />
      <div className="padding-home-page mb-padding-home-page">
        <ServiceHome />
        <Deal />
        <TitleHome data={titleHome} />
        <ProductHome product={products} />
        <TitleHome data={titleHome1} />
        <ProductHome product={products1} />
        <DealSoon />
        <BrandArea />
      </div>
      {/* <HeaderHome /> */}
      {/* <BodyHome /> */}
      {/* <Seketon/> */}
    </div>
  );
}
