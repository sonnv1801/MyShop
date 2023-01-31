import React, { useState, useEffect } from 'react';
import { ProductReviews } from './ProductReviews';
import { ProductSimilar } from './ProductSimilar';
const Prd = [
  {
    id: 1,
    url: 'https://vinfruits.com/wp-content/uploads/2022/05/2-4.png',
    review:
      'Quà tặng là một sự thay mặt và là sự gửi trao yêu thương đầy chân thành của người gửi dành cho người nhận. ',
  },
  {
    id: 2,
    url: 'https://vinfruits.com/wp-content/uploads/2022/05/3-3.png',
    review:
      'Quà tặng là một sự thay mặt và là sự gửi trao yêu thương đầy chân thành của người gửi dành cho người nhận. ',
  },
  {
    id: 3,
    url: 'https://vinfruits.com/wp-content/uploads/2022/05/Thiet-ke-chua-co-ten-15.png',
    review:
      'Quà tặng là một sự thay mặt và là sự gửi trao yêu thương đầy chân thành của người gửi dành cho người nhận. ',
  },
  {
    id: 4,
    url: 'https://vinfruits.com/wp-content/uploads/2022/05/1-4.png',
    review:
      'Quà tặng là một sự thay mặt và là sự gửi trao yêu thương đầy chân thành của người gửi dành cho người nhận. ',
  },
];

export const Product = () => {
  const [mainImage, setMainImage] = useState(Prd[0]);
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
    if (quantity >= 20) {
      setQuantity(20);
    }
  };

  const handleDecrease = () => {
    setQuantity(quantity - 1);
    if (quantity <= 1) {
      setQuantity(1);
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-12 col-sm-12">
            <div className="prd-img">
              <div className="img-body">
                <img src={mainImage.url} alt="img" />
              </div>
              <div>
                <div className="row sm-row-flex">
                  {Prd.map((imgs, index) => (
                    <div
                      className="col-xl-3 col-md-3 col-sm-3 sm-body-flex"
                      key={index}
                    >
                      <div className="img-bottom">
                        <img
                          src={imgs.url}
                          alt="img"
                          onClick={() => setMainImage(imgs)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-md-12 col-sm-12">
            <div className="prd-title sm-prd-title">
              <h1>Giỏ Trái Cây Tri Ân</h1>
              <h1>1,000,000₫</h1>
              <span>
                Giỏ Trái Cây Tri Ân 6 bao gồm 9 loại trái cây nhập khẩu đa dạng:
              </span>
              <ul>
                <li>Lê Hàn Quốc: 1 quả</li>
                <li>Lê Hàn Quốc: 1 quả</li>
                <li>Lê Hàn Quốc: 1 quả</li>
                <li>Lê Hàn Quốc: 1 quả</li>
                <li>Lê Hàn Quốc: 1 quả</li>
                <li>Lê Hàn Quốc: 1 quả</li>
                <li>Lê Hàn Quốc: 1 quả</li>
              </ul>
              <span>
                Mẫu mã sản phẩm có thể thay đổi tùy theo mùa vụ trái cây.
              </span>
              <div className="btn-body sm-btn-body">
                <button className="button-decimal" onClick={handleDecrease}>
                  -
                </button>
                <input value={quantity} min="1" max="50" />
                <button className="button-decimal" onClick={handleIncrease}>
                  +
                </button>
                <button type="button" className="btn btn-warning btn-add">
                  Add to cart
                </button>
                <button type="button" className="btn btn-warning btn-add">
                  Buy Now
                </button>
              </div>
              <span>
                Danh mục: Giỏ Quà Trái Cây, Giỏ Trái Cây + Hoa Tươi, Trên
                3.000.000đ
              </span>
              <span>
                Từ khóa: Gio qua tang trai cay, gio qua trai cay, giỏ trái cây,
                Trái Cây nhập khẩu
              </span>
            </div>
          </div>
          <div className="col-xl-12 col-md-12 col-sm-12">
            <ProductReviews product={Prd} />
          </div>
          <div className="col-xl-12 col-md-12 col-sm-12">
            <ProductSimilar />
          </div>
        </div>
      </div>
    </div>
  );
};
