import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import "../page-stylesheets/ForgotPassword.css";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const loginNavigate = useOutletContext();

    function handleSubmit(event) {
        event.preventDefault();
        alert("A password reset link has been sent to your email.");
        loginNavigate.returnToLogin();
    }

    return (
        <main>
            <div id="forgot-password-div">
                <h2>Enter the email address associated with the account:</h2>
                <form id="forgot-password-form" onSubmit={handleSubmit}>
                    <label htmlFor="email-to-contact">Email: </label>
                    <input 
                        id="email-to-contact"
                        name="email-to-contact"
                        type="text" 
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    /><br/><br/>
                    <input id="submit-email" type="submit"/>
                </form>
                <button onClick={() => loginNavigate.returnToLogin()}>Go Back</button>
            </div>
        </main>
    )
}

export default ForgotPassword;