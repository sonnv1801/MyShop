import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import LeftArrow from '../../assets/images/left-arrow1.png';
import RightArrow from '../../assets/images/right-arrow1.png';
import Container from 'react-bootstrap/Container';

import './Home.css';
import CardProduct from '../CardProduct';

export default function ProductHome(props: any) {
  console.log(props.product, 'san pham');
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }: any) => (
    <img className="ok" src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }: any) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  );
  const settings = {
    breakpoint: 480,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
    <Container className="product-home mb-produt-home">
      <Slider {...settings}>
        {props.product
          ? props.product.map((data: any) => (
              <CardProduct
                key={data.id}
                id={data.id}
                name={data.name}
                price={data.price}
                oldprice={data.oldprice}
                imgPath={data.imgPath}
              />
            ))
          : null}
      </Slider>
    </Container>
  );
}
