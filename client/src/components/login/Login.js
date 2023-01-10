import { Link } from 'react-router-dom';
import '.././Login&Registration.css';

export const Login = () => {
  return (
    <div className="container-fluid login-parent">
      <div className="form-box">
        <h1>Đăng Nhập</h1>
        <form>
          <div className="input-groupd">
            <div className="input-field">
              <i class="fa fa-user"></i>
              <input type="text" placeholder="Name" />
            </div>
            <div className="input-field">
              <i class="fa fa-expeditedssl"></i>
              <input type="password" placeholder="Password" />
            </div>
            <p>
              Quên mật khẩu? <a href="!#">Bấm Vào Đây</a>
            </p>
          </div>
          <div className="btn-field">
            <button type="button">Đăng nhập</button>
            <button type="button" className="disable">
              <Link
                to="/register"
                style={{ textDecoration: 'none', color: '#555' }}
              >
                Đăng ký
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
