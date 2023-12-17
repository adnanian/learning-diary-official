import { useEffect, useState } from 'react';
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedOutPage, setLoggedOutPage] = useState("/login");
 
  //console.log(user);
  const navigate = useNavigate();

  //const login = () => setIsLoggedIn(true);
  const logout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
  };


  const [userOutletContext, setUserOutletContext] = useState(
    {
      currentUser: null,
      loginNavigate: {
        login: (userToLogin) => {
          setIsLoggedIn(true);
          setCurrentUser(userToLogin);
        },
        createAccount: () => setLoggedOutPage("/register"),
        forgotPassword: () => setLoggedOutPage("/forgot-password"),
        returnToLogin: () => setLoggedOutPage("/login")
      }
    }
  );

  function setCurrentUser(userToLogin) {
    setUserOutletContext(
      {...userOutletContext, currentUser: userToLogin}
    );
  }

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    } else {
      navigate(loggedOutPage);
    }
  }, [isLoggedIn, loggedOutPage, navigate]);


  return (
      <div>
        {isLoggedIn ? <NavBar logout={logout} /> : <Navigate to={loggedOutPage} />}
        <Outlet context={userOutletContext} />
      </div>
  );
}

export default App;
