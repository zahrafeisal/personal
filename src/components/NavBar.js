import React from "react";

function NavBar() {
    return (
        <nav>
            <a href="/personal/home">Home</a>
            <ul>
                <li>
                    <a href="/personal/about">Text</a>
                    <a href="/personal/">Log out</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;