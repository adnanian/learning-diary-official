import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <nav className="navigation">
            <NavLink
                to="/login"
                className="nav-link"
            >
                Logout
            </NavLink>
        </nav>
    );
}

export default NavBar; 