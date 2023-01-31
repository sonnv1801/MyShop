import React, { useState, useEffect } from 'react';
const MyImg = [
  {
    id: 1,
    url: 'https://vinfruits.com/wp-content/uploads/2022/05/2-4.png',
  },
  {
    id: 2,
    url: 'https://vinfruits.com/wp-content/uploads/2022/05/3-3.png',
  },
  {
    id: 3,
    url: 'https://vinfruits.com/wp-content/uploads/2022/05/Thiet-ke-chua-co-ten-15.png',
  },
  {
    id: 4,
    url: 'https://vinfruits.com/wp-content/uploads/2022/05/1-4.png',
  },
];

export const Product = () => {
  const [mainImage, setMainImage] = useState(MyImg[0]);
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
                <div className="row">
                  {MyImg.map((imgs, index) => (
                    <div className="col-xl-3 col-md-3 col-sm-3" key={index}>
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
            <div className="prd-title">
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
              <button>-</button>
              <input value="1" />
              <button>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
