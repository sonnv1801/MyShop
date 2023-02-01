import React from 'react';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { AiFillTag } from 'react-icons/ai';

export const CartProduct = () => {
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-xl-8 col-md-12 col-sm-12">
          <div className="product-cart sm-product-cart">
            <div className="row sm-row-cart">
              <div className="col-xl-2 col-md-2 col-2 ">
                <b className="cart-title">Sản phẩm</b>
              </div>
              <div className="col-xl-4 col-md-4 col-4">
                <b className="cart-title">Tên</b>
              </div>
              <div className="col-xl-2 col-md-2 col-2 ">
                <b className="cart-title">Giá</b>
              </div>
              <div className="col-xl-2 col-md-2 col-2 ">
                <b className="cart-title">Số lượng</b>
              </div>
              <div className="col-xl-2 col-md-2 col-2 ">
                <b className="cart-title">Tạm tính</b>
              </div>
            </div>
            <div className="row dt-title-cart md-title-cart sm-title-cart ">
              <div className="col-8">
                <b className="cart-title">Sản phẩm</b>
              </div>

              <div className="col-4 ">
                <b className="cart-title">Số lượng</b>
              </div>
            </div>
            <div className="cart-body md-cart-body sm-cart-body">
              <div className="row">
                <div className="col-xl-2 col-md-2 col-3">
                  <span className="delete-prd">
                    <RiDeleteBin2Line />
                  </span>
                  <img
                    className="img-cart"
                    src="https://vinfruits.com/wp-content/uploads/2022/10/sp-09.png"
                    alt="img"
                  />
                </div>
                <div className="col-xl-4 col-md-4 col-3">
                  <p className="title-product-cart sm-title-product-cart">
                    Giỏ Trái Cây Biếu Tặng
                  </p>
                  <b className="price-product-cart dt-price-prd-cart md-prd-price">
                    3,500,000₫
                  </b>
                </div>
                <div className="col-xl-2 col-md-2 col-3 sm-dlnone-cart">
                  <b className="price-product-cart">3,500,000₫</b>
                </div>
                <div className="col-xl-2 col-md-2 col-6">
                  <button className="btn-quantity-cart">-</button>
                  <input className="quantity-cart" value={10} />
                  <button className="btn-quantity-cart">+</button>
                </div>

                <div className="col-xl-2 col-md-2 col-2 sm-dlnone-cart">
                  <b className="price-product-cart ">3,500,000₫</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-12 col-sm-12">
          <div className="total-cart">
            <b className="title-total">Cộng giỏ hàng</b>
            <p className="sub-total">Tạm tính</p>
            <b className="sub-price">3,500,000₫</b>
            <hr />
            {/* <i>Nhập địa chỉ của bạn để xem các tùy chọn vận chuyển</i> */}
            <p className="sub-total">Giao hàng</p>
            <b className="sub-price">500,000₫</b>
            <hr />
            <p className="sub-total">Tổng</p>
            <b className="sub-price">3,500,000₫</b>
            <hr />
            <button className="sub-btn-cart">Tiến hành thanh toán</button>
            <i className="voucher">
              <AiFillTag />
              <b className="sub-voucher">Phiếu giảm giá</b>
            </i>
            <form>
              <input className="sub-code" type="text" placeholder="Mã ưu đãi" />
              <button className="sub-btn-code">Áp dụng</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
