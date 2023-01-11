import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../redux/apiRequest';
import '.././Login&Registration.css';
import { useDispatch } from 'react-redux';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const newUser = {
      username: username,
      password: password,
    };
    loginUser(newUser, dispatch, navigate);
  };
  return (
    <div className="container-fluid login-parent">
      <div className="form-box">
        <h1>Đăng Nhập</h1>
        <form onSubmit={handleLogin}>
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
              <i class="fa fa-expeditedssl"></i>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p>
              Quên mật khẩu? <a href="!#">Bấm Vào Đây</a>
            </p>
          </div>
          <div className="btn-field">
            <button type="submit">Đăng nhập</button>
            <button type="submit" className="disable">
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
