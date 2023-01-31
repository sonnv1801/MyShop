import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Home.css';
import { Link } from 'react-router-dom';
import { Card } from '../Card';

const products = [
  {
    id: 1,
    name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON',
    price: '$150.00',
    oldprice: '$250.00',
    imgPath:
      'https://vinfruits.com/wp-content/uploads/2022/05/dd013c305e759e2bc764-900x900.jpg',
  },
  {
    id: 2,
    name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON',
    price: '$150.00',
    oldprice: '$250.00',
    imgPath:
      'https://vinfruits.com/wp-content/uploads/2022/05/dd013c305e759e2bc764-900x900.jpg',
  },
  {
    id: 3,
    name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON',
    price: '$150.00',
    oldprice: '$250.00',
    imgPath:
      'https://vinfruits.com/wp-content/uploads/2022/05/dd013c305e759e2bc764-900x900.jpg',
  },
  {
    id: 4,
    name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON',
    price: '$150.00',
    oldprice: '$250.00',
    imgPath:
      'https://vinfruits.com/wp-content/uploads/2022/05/dd013c305e759e2bc764-900x900.jpg',
  },
  {
    id: 5,
    name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON',
    price: '$150.00',
    oldprice: '$250.00',
    imgPath:
      'https://vinfruits.com/wp-content/uploads/2022/05/dd013c305e759e2bc764-900x900.jpg',
  },
  {
    id: 6,
    name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON',
    price: '$150.00',
    oldprice: '$250.00',
    imgPath:
      'https://vinfruits.com/wp-content/uploads/2022/05/dd013c305e759e2bc764-900x900.jpg',
  },
];

export default function ProductHome() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container-prd md-container-prd" data-aos="fade-up">
        <Slider {...settings}>
          {products.map((item) => (
            <Link to="/product" className="cart-nav">
              <Card items={item} />
            </Link>
          ))}
        </Slider>
      </div>
    </>
  );
}
