import { useEffect, useState } from 'react';
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedOutPage, setLoggedOutPage] = useState("/login");
  const navigate = useNavigate();

  //const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);
  
  const loginNavigate = {
    login: () => setIsLoggedIn(true),
    createAccount: () => setLoggedOutPage("/register"),
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
    <div>
      {isLoggedIn ? <NavBar logout={logout} /> : <Navigate to={loggedOutPage} />}
      <Outlet context={loginNavigate} />
    </div>
  );
}

export default App;
