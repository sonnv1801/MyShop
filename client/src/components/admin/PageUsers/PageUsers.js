import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteUser, getAllUsers } from '../../../redux/apiRequest';
import { useNavigate } from 'react-router-dom';
import { createAxios } from '../../../createInstance';
import { loginSuccess } from '../../../redux/authSlice';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
export const PageUsers = () => {
  const user = useSelector((state) => state.auth.login?.currentUser);
  const userList = useSelector((state) => state.users.users?.allUsers);
  const msg = useSelector((state) => state.users?.msg);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let axiosJWT = createAxios(user, dispatch, loginSuccess);

  // const refreshToken = async () => {
  //   try {
  //     const res = await axios.post('http://localhost:8000/v1/auth/refresh', {
  //       withCredentials: true,
  //     });
  //     return res.data;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // axiosJWT.buttonnewInstance.interceptors.request.use(
  //   async (config) => {
  //     let date = new Date();
  //     const decodedToken = jwt_decode(user?.accessToken);
  //     if (decodedToken.exp < date.getTime() / 1000) {
  //       const data = await refreshToken();
  //       const refreshUser = {
  //         ...user,
  //         accessToken: data.accessToken,
  //       };
  //       dispatch(loginSuccess(refreshUser));
  //       config.headers['token'] = 'vanson ' + data.accessToken;
  //     }
  //     return config;
  //   },
  //   (err) => {
  //     return Promise.reject(err);
  //   }
  // );

  const handleDelete = (id) => {
    deleteUser(user?.accessToken, dispatch, id, axiosJWT);
  };

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
    if (user?.accessToken) {
      getAllUsers(user?.accessToken, dispatch, axiosJWT);
    }
  }, []);
  return (
    <>
      <p>{`Your Role: ${user?.admin ? `Admin` : `User`}`}</p>
      <div>
        {userList?.map((user) => {
          return (
            <div>
              <p>{user.username}</p>
              <button type="button" onClick={() => handleDelete(user._id)}>
                Del
              </button>
            </div>
          );
        })}
        <div> {msg}</div>
      </div>
    </>
  );
};
