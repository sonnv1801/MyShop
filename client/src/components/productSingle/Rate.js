import React, { useState } from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

export const Rate = () => {
  const [number, setNumber] = useState(0);
  const [hoverStar, setHoverStar] = useState(undefined);

  const handleText = () => {
    switch (number || hoverStar) {
      case 0:
        return 'Đánh giá';
      case 1:
        return 'Không hài lòng';
      case 2:
        return 'Tệ';
      case 3:
        return 'Bình thường';
      case 4:
        return 'Tốt';
      case 5:
        return 'Rất tốt';
      default:
        return 'Đánh giá';
    }
  };

  const handlePlaceHolder = () => {
    switch (number || hoverStar) {
      case 0:
        return 'Bình luận ở đây...';
      case 1:
      case 2:
      case 3:
      case 4:
        return 'Bạn đang gặp vấn đề gì';
      case 5:
        return 'Tại sao bạn thích sản phẩm của chúng tôi';
      default:
        return 'Bình luận ở đây...';
    }
  };
  //   const stars = 4.5;
  //   const ratingStar = Array.from({ length: 5 }, (elem, index) => {
  //     let number = index + 0.5;
  //     return (
  //       <span key={index}>
  //         {stars >= index + 1 ? (
  //           <FaStar className="icon" />
  //         ) : stars >= number ? (
  //           <FaStarHalfAlt className="icon" />
  //         ) : (
  //           <AiOutlineStar className="icon" />
  //         )}
  //       </span>
  //     );
  //   });
  return (
    <div className="rate">
      <h1>Đánh Giá</h1>
      <span>Chưa có đánh giá nào</span>
      <div className="rate-cotainer">
        <div className="rate-body">
          <h1>Hãy là người đầu tiên nhận xét “Giỏ Trái Cây Biếu Tặng” </h1>
          <form>
            <b>Đánh giá của bạn*</b>
            <p>{handleText()}</p>
            {/* {ratingStar} */}
            <p>
              {Array(5)
                .fill()
                .map((_, index) =>
                  number >= index + 1 || hoverStar >= index + 1 ? (
                    <AiFillStar
                      onMouseOver={() => !number && setHoverStar(index + 1)}
                      onMouseLeave={() => setHoverStar(undefined)}
                      style={{ color: 'orange' }}
                      onClick={() => setNumber(index + 1)}
                    />
                  ) : (
                    <AiOutlineStar
                      onMouseOver={() => !number && setHoverStar(index + 1)}
                      onMouseLeave={() => setHoverStar(undefined)}
                      style={{ color: 'orange' }}
                      onClick={() => setNumber(index + 1)}
                    />
                  )
                )}
            </p>
            <b>Nhận xét của bạn*</b>
            <textarea
              className="text-rate"
              placeholder={handlePlaceHolder()}
            ></textarea>
            <b>Tên*</b>
            <input
              type="text"
              className="text-rate"
              placeholder="Nhập tên của bạn..."
            />
            <b>Email*</b>
            <input
              type="email"
              className="text-rate"
              placeholder="Nhập email của bạn ..."
            />
            <button className="btn-rate ">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};
