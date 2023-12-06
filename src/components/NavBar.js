import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar({ logout }) {
    return (
        <nav className="navigation">
            <NavLink
                to="/"
                className="nav-link"
            >
                Home
            </NavLink>
            <button onClick={logout}>Logout</button>
        </nav>
    );
}

export default NavBar; 