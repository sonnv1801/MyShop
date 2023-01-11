import '.././Login&Registration.css';
import EmailIcon from '@mui/icons-material/Email';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { registerUser } from '../../redux/apiRequest';
import { useDispatch } from 'react-redux';

export const Registration = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = {
      email: email,
      username: username,
      password: password,
    };
    registerUser(newUser, dispatch, navigate);
  };
  return (
    <div className="container-fluid login-parent">
      <div className="form-box">
        <h1>Đăng Ký</h1>
        <form onSubmit={handleRegister}>
          <div className="input-groupd">
            <div className="input-field">
              <i class="fa fa-user"></i>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i>
                <EmailIcon style={{ fontSize: '18px' }} />
              </i>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i class="fa fa-expeditedssl"></i>
              <input
                type="password"
                placeholder="Mật khẩu"
                onChange={(e) => setPassword(e.target.value)}
              />
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
            <button type="submit">Đăng Ký</button>
          </div>
        </form>
      </div>
    </div>
  );
};
