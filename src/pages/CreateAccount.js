import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import "../page-stylesheets/CreateAccount.css";

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

        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    firstName: firstName,
                    lastName: lastName,
                    username: username,
                    email: email,
                    password: password,
                    notes: []
                }
            )
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(`${data.username} created!`);
                alert("Account successfully created.");
            });

        loginNavigate.returnToLogin();
    }

    return (
        <main>
            <div id="create-account-div">
                <form id="registration-form" onSubmit={handleSubmit}>
                    <h1>Enter the following information: </h1>
                    <div className="input-line">
                        <label htmlFor="firstname">First Name</label>
                        <input
                            id="firstname"
                            className="registration-field"
                            name="firstname"
                            type="text"
                            value={firstName}
                            onChange={(event) => setFirstName(event.target.value)}
                        />
                    </div>
                    <div className="input-line">
                        <label htmlFor="lastname">Last Name</label>
                        <input
                            id="lastname"
                            className="registration-field"
                            name="lastname"
                            type="text"
                            value={lastName}
                            onChange={(event) => setLastName(event.target.value)}
                        />
                    </div>
                    <div className="input-line">
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            className="registration-field"
                            name="username"
                            type="text"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>
                    <div className="input-line">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            className="registration-field"
                            name="email"
                            type="text"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="input-line">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            className="registration-field"
                            name="password"
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div><br/>
                    <input type="submit" value="Register" />
                </form>
            </div>
        </main>
    );
}

export default CreateAccount;