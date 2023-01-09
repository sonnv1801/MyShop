import React from 'react';
import { UserAuth } from '../store/context/AuthContext';

const Profile = () => {
  const { logOut, user } = UserAuth();

  console.log(user.metadata.lastSignInTime, 'User');

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[300px] m-auto" style={{ textAlign: 'center' }}>
      <h1 className="text-center text-2xl font-bold pt-12">Profile</h1>
      <div>
        <p>Welcome, {user?.displayName}</p>
        <img src={user?.photoURL} alt={user?.displayName} />
        <p>Welcome, {user.metadata.lastSignInTime}</p>
      </div>
      <button onClick={handleSignOut} className="border py-2 px-5 mt-10">
        Logout
      </button>
    </div>
  );
};

export default Profile;
