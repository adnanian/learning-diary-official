import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import './Login.css';

function Login() {
    const loginNavigate = useOutletContext();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(event) {
        event.preventDefault();
        loginNavigate.login();
    }

    function viewRegistrationForm() {
        loginNavigate.createAccount();
    }

    return (
        <main>
            <div id="login-div">
                <form id="login-form" onSubmit={handleLogin}>
                    <label htmlFor="username">Username / Email</label><br />
                    <input
                        id="username"
                        name="username"
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    /><br />
                    <label htmlFor="password">Password</label><br />
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    /><br /><br />
                    <button id="login" type="submit">Login</button><br/><br/>
                </form>
                <button id="create-account" onClick={viewRegistrationForm}>Create Account</button><br/><br/>
                <button id="forgot-login">Forgot Password?</button>
            </div>
        </main>
    );
}

export default Login;