import { useContext, useEffect, useState } from 'react';
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import { UserContext, UserProvider } from './user';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedOutPage, setLoggedOutPage] = useState("/login");
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  const navigate = useNavigate();

  //const login = () => setIsLoggedIn(true);
  const logout = () => {
    setIsLoggedIn(false);
    if (user) {
      setUser(null);
    }
  };
  
  const loginNavigate = {
    login: (userToLogin) => {
      setIsLoggedIn(true);
      if (!user) {
        setUser(userToLogin);
      }
    },
    createAccount: () => setLoggedOutPage("/register"),
    forgotPassword: () => setLoggedOutPage("/forgot-password"),
    returnToLogin: () => setLoggedOutPage("/login")
  }

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    } else {
      navigate(loggedOutPage);
    }
  }, [isLoggedIn, loggedOutPage, navigate]);


  return (
    <UserProvider>
      {isLoggedIn ? <NavBar logout={logout} /> : <Navigate to={loggedOutPage} />}
      <Outlet context={loginNavigate} />
    </UserProvider>
  );
}

export default App;
