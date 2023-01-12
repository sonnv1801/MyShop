import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteUser, getAllUsers } from '../../../redux/apiRequest';
import { useNavigate } from 'react-router-dom';
import { createAxios } from '../../../createInstance';
import { loginSuccess } from '../../../redux/authSlice';
export const PageUsers = () => {
  const user = useSelector((state) => state.auth.login?.currentUser);
  const userList = useSelector((state) => state.users.users?.allUsers);
  const msgErr = useSelector((state) => state.users?.msg);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const axiosJWT = createAxios(user, dispatch, loginSuccess);

  const handleDel = (id) => {
    deleteUser(user?.accessToken, dispatch, id, axiosJWT);
  };

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
    if (user?.accessToken) {
      getAllUsers(user.accessToken, dispatch, axiosJWT);
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
              <button type="button" onClick={() => handleDel(user._id)}>
                Del
              </button>
            </div>
          );
        })}
        <div> {msgErr}</div>
      </div>
    </>
  );
};
