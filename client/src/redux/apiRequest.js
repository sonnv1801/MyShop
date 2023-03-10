import { async } from '@firebase/util';
import axios from 'axios';
import {
  loginFailed,
  loginStart,
  loginSuccess,
  logOutFailed,
  logOutStart,
  logOutSuccess,
  registerFailed,
  registerStart,
  registerSuccess,
} from './authSlice';
import {
  deleteUserFailed,
  deleteUserStart,
  deleteUserSuccess,
  getUsersFailed,
  getUsersStart,
  getUsersSuccess,
} from './useSlice';

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post('http://localhost:8000/v1/auth/login', user);
    dispatch(loginSuccess(res.data));
    navigate('/');
  } catch (error) {
    dispatch(loginFailed());
  }
};

export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    await axios.post('http://localhost:8000/v1/auth/register', user);
    dispatch(registerSuccess());
    navigate('/login');
  } catch (error) {
    dispatch(registerFailed());
  }
};

export const getAllUsers = async (accessToken, dispatch, axiosJWT) => {
  dispatch(getUsersStart());
  try {
    const res = await axiosJWT.get('http://localhost:8000/v1/user', {
      headers: { token: `vanson ${accessToken}` },
    });
    dispatch(getUsersSuccess(res.data));
  } catch (error) {
    dispatch(getUsersFailed());
  }
};

export const deleteUser = async (accessToken, dispatch, id, axiosJWT) => {
  dispatch(deleteUserStart());
  try {
    const res = await axiosJWT.delete('http://localhost:8000/v1/user/' + id, {
      headers: { token: `vanson ${accessToken}` },
    });
    dispatch(deleteUserSuccess(res.data));
  } catch (err) {
    dispatch(deleteUserFailed(err.response.data));
  }
};

export const logOut = async (dispatch, id, navigate, accessToken, axiosJWT) => {
  dispatch(logOutStart());
  try {
    await axiosJWT.post('http://localhost:8000/v1/auth/logout', id, {
      headers: { token: `vanson ${accessToken}` },
    });
    dispatch(logOutSuccess());
    navigate('/login');
  } catch (err) {
    dispatch(logOutFailed());
  }
};
