import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import brand1 from '../../assets/images/barnd-home/brand1.png';
import brand2 from '../../assets/images/barnd-home/brand2.png';
import brand3 from '../../assets/images/barnd-home/brand3.png';
import brand4 from '../../assets/images/barnd-home/brand4.png';

import './Home.css';
const imgBrand = [
  {
    id: 1,
    img: brand1,
  },
  {
    id: 2,
    img: brand2,
  },
  {
    id: 3,
    img: brand3,
  },
  {
    id: 4,
    img: brand4,
  },
];

export const BrandArea = () => {
  return (
    <div className="brand">
      <div className="row">
        {imgBrand.map((imgdata) => (
          <div className="col-xl-3 col-md-4 col-sm-6">
            <img key={imgdata.id} src={imgdata.img} alt={imgdata.img} />
          </div>
        ))}
      </div>
    </div>
  );
};
