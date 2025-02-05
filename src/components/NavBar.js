import React from "react";

function NavBar() {
    return (
        <nav>
            <a href="#/home">Home</a>
            <ul>
                <li>
                    <a href="#/about">About</a>
                </li>
                <li>
                    <a href="#/">Log out</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;