import { useState } from "react";
import { useOutletContext } from "react-router-dom";

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
            <div>
                <form id="forgot-password-form" onSubmit={handleSubmit}>
                    <h2>Enter the email address associated with the account:</h2>
                    <label htmlFor="email-to-contact">Email</label>
                    <input 
                        id="email-to-contact"
                        name="email-to-contact"
                        type="text" 
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <input type="submit"/>
                </form>
            </div>
        </main>
    )
}

export default ForgotPassword;