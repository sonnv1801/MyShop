import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Card } from '../Card';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

export const ProductSimilar = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
      <h1 className="prd-similar">Sản phẩm tương tự</h1>
      <div className="container-prd md-container-prd">
        <Slider {...settings}>
          {products.map((item) => (
            <Link to="#" className="cart-nav">
              <Card items={item} />
              <button type="button" class="btn btn-warning btn-prd-similar">
                Buy now
              </button>
            </Link>
          ))}
        </Slider>
      </div>
    </>
  );
};
