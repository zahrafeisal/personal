import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="poppins-semibold">
            <ul>
                <li>
                    <Link to="/" className="nav-link">Log out</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;