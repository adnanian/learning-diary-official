import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import '../page-stylesheets/Login.css'

function Login() {
    const loginNavigate = useOutletContext();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(event) {
        event.preventDefault();
        // Login validation will be replaced later on.
        fetch('http://localhost:3000/users')
            .then((response) => response.json())
            .then((data) => {
                let index = 0;
                let isValidCredentials = false;
                let userToLogin = null;
                while (!isValidCredentials && index < data.length) {
                    if (username === data[index].username || username === data[index].email) {
                        if (password === data[index].password) {
                            isValidCredentials = true;
                            userToLogin = data[index];
                        } 
                    }
                    index++;
                }
                if (isValidCredentials) {
                    loginNavigate.login();
                    console.log(userToLogin);
                } else {
                    alert("Invalid credentials! Please try again! :(");
                }
            });
    }

    function viewRegistrationForm() {
        loginNavigate.createAccount();
    }

    function navigateToForgottenPasswordPage() {
        loginNavigate.forgotPassword();
    }

    return (
        <main>
            <div id="login-div">
                <form id="login-form" onSubmit={handleLogin}>
                    <label htmlFor="username" className="login-label">Username / Email</label><br />
                    <input
                        id="username"
                        className="login-credentials"
                        name="username"
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    /><br />
                    <label htmlFor="password" className="login-label">Password</label><br />
                    <input
                        id="password"
                        className="login-credentials"
                        name="password"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    /><br /><br />
                    <button id="login" className="stretch-button" type="submit">Login</button><br/><br/>
                </form>
                <button 
                    id="create-account" 
                    className="stretch-button"
                    onClick={viewRegistrationForm}
                >
                    Create Account
                </button><br/>
                <button 
                    id="forgot-login" 
                    className="stretch-button"
                    onClick={navigateToForgottenPasswordPage}
                >
                    Forgot Password?
                </button>
            </div>
        </main>
    );
}

export default Login;