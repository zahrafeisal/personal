import React from "react";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

function HomePage() {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/about");
    }
    return (
        <>
        <NavBar />
        <div className="home-div">
            <h2>Hi, Karl</h2>
            <h1>Happy 19th Birthday!!!🥳</h1>
            <p>This is somehow my version of a paragraph and I wasn't
                <br />
                so sure about it at first but I really hope you like it.
                <br />
                I wanted to do something out of the ordinary :)
            </p>
            <button
              onClick={handleButtonClick}
              type="button"
              className="login-button btn btn-outline-info"
            >
                <span>Take a look</span>
            </button>
        </div>
        </>
    );
}

export default HomePage;