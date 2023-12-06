import { useState } from "react";
import { useOutletContext } from "react-router-dom";

function CreateAccount() {
    const loginNavigate = useOutletContext();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        console.log("SUBMIT");
        loginNavigate.returnToLogin();
    }

    return (
        <main>
            <div>
                <form onSubmit={handleSubmit}>
                    <h1>Enter the following information: </h1>
                    <div>
                        <label htmlFor="firstname">First Name</label>
                        <input
                            id="firstname"
                            name="firstname"
                            type="text"
                            value={firstName}
                            onChange={(event) => setFirstName(event.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="lastname">Last Name</label>
                        <input
                            id="lastname"
                            name="lastname"
                            type="text"
                            value={lastName}
                            onChange={(event) => setLastName(event.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="text"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <input type="submit" value="Register" />
                </form>
            </div>
        </main>
    );
}

export default CreateAccount;