import { useEffect, useState } from 'react';
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);
  
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [isLoggedIn]);


  return (
    <div>
      {isLoggedIn ? <NavBar logout={logout} /> : <Navigate to="/login" />}
      <Outlet context={login} />
    </div>
  );
}

export default App;
