import '.././Login&Registration.css';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';

export const Registration = () => {
  return (
    <div className="container-fluid login-parent">
      <div className="form-box">
        <h1>Đăng Ký</h1>
        <form>
          <div className="input-groupd">
            <div className="input-field">
              <i class="fa fa-user"></i>
              <input type="text" placeholder="Name" />
            </div>
            <div className="input-field">
              <i>
                <EmailIcon style={{ fontSize: '18px' }} />
              </i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i class="fa fa-expeditedssl"></i>
              <input type="password" placeholder="Mật khẩu" />
            </div>
            <div className="input-field">
              <i class="fa fa-expeditedssl"></i>
              <input type="password" placeholder="Nhập lại mật khẩu" />
            </div>
            <p style={{ float: 'right' }}>
              Bạn đã có tài khoản? <Link to="/login">Đăng Nhập</Link>
            </p>
          </div>
          <div className="btn-field">
            <button type="button">Đăng Ký</button>
          </div>
        </form>
      </div>
    </div>
  );
};
