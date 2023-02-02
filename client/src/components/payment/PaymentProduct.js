import React from 'react';

export const PaymentProduct = () => {
  return (
    <div className="container-fluid">
      <div className="my-voucher">
        <p>
          Bạn có mã ưu đãi?
          <a
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Ấn vào đây để nhập mã.
          </a>
        </p>
        <div className="collapse my-voucher-body" id="collapseExample">
          <div className="card card-body voucher-cart">
            <span>
              Nếu bạn có mã giảm giá, vui lòng điền vào phía bên dưới.
            </span>
            <form>
              <input
                className="voucher-input"
                type="text"
                placeholder="Mã ưu đãi"
              />
              <button className="voucher-btn" type="button">
                Áp dụng
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="my-payment">
        <div className="row">
          <div className="col-xl-6 col-12">
            <h1 className="title-info">THÔNG TIN THANH TOÁN</h1>
            <div
              className="modal fade modal-phone"
              id="exampleModalToggle"
              aria-hidden="true"
              aria-labelledby="exampleModalToggleLabel"
              tabindex="-1"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content modal-body">
                  <input type="text" placeholder="Nhập số điện thoại" />
                  <div className="modal-footer modal-body-footer">
                    <button className="btn btn-success btn-continue">
                      Tiếp tục
                    </button>
                    <button
                      className="btn btn-primary btn-continue"
                      type="button"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      Hủy
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="modal-title-payment"
              href="#!"
              data-bs-target="#exampleModalToggle"
              data-bs-toggle="modal"
            >
              +Lấy địa chỉ mua hàng lần trước
            </a>
            <div className="payment-infomation">
              <form>
                <span>Họ và tên *</span>
                <input type="text" placeholder="Họ tên của bạn"></input>
                <div className="row">
                  <div className="col-xl-6 col-md-6 col-12">
                    <span>Số điện thoại *</span>
                    <input
                      type="text"
                      placeholder="Số điện thoại của bạn"
                    ></input>
                  </div>
                  <div className="col-xl-6 col-md-6 col-12">
                    <span>Địa chỉ email *</span>
                    <input
                      type="text"
                      placeholder="Địa chỉ email của bạn"
                    ></input>
                  </div>
                  <div className="col-xl-6 col-md-6 col-12">
                    <span>Tỉnh/Thành phố *</span>
                    <select>
                      <option>Đà Nẵng</option>
                      <option>Bình Định</option>
                      <option>Quảng Ngãi</option>
                    </select>
                  </div>
                  <div className="col-xl-6 col-md-6 col-12">
                    <span>Quận/Huyện *</span>
                    <select>
                      <option>Đà Nẵng</option>
                      <option>Bình Định</option>
                      <option>Quảng Ngãi</option>
                    </select>
                  </div>
                  <div className="col-xl-6 col-md-6 col-12">
                    <span>Xã/Phường *</span>
                    <select>
                      <option>Đà Nẵng</option>
                      <option>Bình Định</option>
                      <option>Quảng Ngãi</option>
                    </select>
                  </div>
                  <div className="col-xl-6 col-md-6 col-12">
                    <span>Địa chỉ *</span>
                    <input type="text" placeholder="Địa chỉ của bạn"></input>
                  </div>
                  <div className="col-12">
                    <span>Địa chỉ *</span>
                    <textarea placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."></textarea>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xl-6 col-12">
            <div className="payment-product">
              <div className="payment-product-body">
                <h1>ĐƠN HÀNG CỦA BẠN</h1>
                <div className="row">
                  <div className="col-6">
                    <p>SẢN PHẨM</p>
                  </div>
                  <div className="col-6">
                    <p className="payment-temporary">Tạm tính</p>
                  </div>
                  <div className="col-6">
                    <span>
                      Giỏ Trái Cây Biếu Tặng <i>× 1</i>
                    </span>
                  </div>
                  <div className="col-6">
                    <b>3,500,000₫</b>
                  </div>
                  <div className="col-6">
                    <span>
                      Giỏ Trái Cây Biếu Tặng <i>× 1</i>
                    </span>
                  </div>
                  <div className="col-6">
                    <b>3,500,000₫</b>
                  </div>
                  <div className="col-6">
                    <span>
                      Giỏ Trái Cây Biếu Tặng <i>× 1</i>
                    </span>
                  </div>
                  <div className="col-6">
                    <b>3,500,000₫</b>
                  </div>
                  <div className="col-6">
                    <span>Tạm tính</span>
                  </div>
                  <div className="col-6">
                    <b>3,500,000₫</b>
                  </div>
                  <div className="col-6">
                    <span>Giao hàng</span>
                  </div>
                  <div className="col-6">
                    <b>Express</b>
                  </div>
                  <div className="col-6">
                    <span>Tổng</span>
                  </div>
                  <div className="col-6">
                    <b>3,500,000₫</b>
                  </div>
                </div>
                <div className="payment-bank">
                  <p>Chuyển khoản qua ngân hàng bên dưới:</p>
                  <ul>
                    <li>Số tài khoản: 0271001903547</li>
                    <li>Tên tài khoản: Nguyen Van Son</li>
                    <li>
                      Tên Ngân hàng: Vietcombank – Ngân hàng thương mại cổ phần
                      Ngoại thương Việt Nam
                    </li>
                  </ul>
                  <i>
                    Vui lòng ghi “số điện thoại đặt hàng” trong nội dung thanh
                    toán.
                  </i>
                  <span className="payment-checkbox">
                    <input type="checkbox" checked />
                    <b>
                      Tôi đã đọc và đồng ý với điều khoản và điều kiện của
                      website *
                    </b>
                  </span>
                  <button className="payment-btn" type="button">
                    Đặt hàng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
