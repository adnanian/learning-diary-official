import { useState } from "react";
import './Login.css';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <main>
            <div>
                <form>
                    <label htmlFor="username">Username</label><br />
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
                    <button type="submit">Login</button>
                </form>
            </div>
        </main>
    );
}

export default Login;