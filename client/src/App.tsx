import { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from './page/Home';
import NavBar from './components/NavBar';
import { useSelector } from 'react-redux'; //8.0.2
import DetailProduct from './page/DetailProduct';
import Footer from './components/Footer';
import Shop from './page/Shop';
import Blog from './page/Blog';
import NotFound from './page/NotFound';
import useEth from './store/context/EthContext/useEth';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AuthContextProvider } from './store/context/AuthContext';
import Protected from './components/Protected';
import Profile from './page/Profile';
import { Login } from './components/login/Login';
import { Registration } from './components/registration/Registration';
import { HomeAdmin } from './page/admin/HomeAdmin';
import { PageUser } from './page/admin/PageUser';

export interface StateStore {
  userLogin: {
    loading: boolean;
    userInfo: {
      name?: string;
    };
    error: boolean;
  };
}

function App() {
  // const [user, setUser] = useState(true);
  // const getuser = useSelector((state: StateStore) => state.userLogin.userInfo);

  // useEffect(() => {
  //   if (getuser === null && getuser === undefined) {
  //     setUser(false);
  //   } else {
  //     setUser(true);
  //   }
  // }, [getuser, user]);
  const user = useSelector((state: any) => state.auth.login.currentUser?.admin);
  return (
    <div className="App">
      <AuthContextProvider>
        {user ? (
          <Router>
            <NavBar children={undefined} />
            <Routes>
              <Route path="/" element={<HomeAdmin />} />
              <Route path="/user" element={<PageUser />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Registration />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        ) : (
          <Router>
            <NavBar children={undefined} />
            <Routes>
              <Route
                path="/profile"
                element={
                  <Protected>
                    <Profile />
                  </Protected>
                }
              />
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/blog" element={<Blog />} />
              {/* <Route
              path="/detail-product/:productId"
              element={user ? <DetailProduct /> : <Navigate to="/login" />}
            /> */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </Router>
        )}
      </AuthContextProvider>
    </div>
  );
}

export default App;
