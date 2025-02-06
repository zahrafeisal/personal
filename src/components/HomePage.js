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
            <div className="avatar">
                <img 
                  src={`${process.env.PUBLIC_URL}/image.jpeg`}
                  alt="Karl"
                />
                <img 
                  src={`${process.env.PUBLIC_URL}/img1.jpeg`}
                  alt="Karl"
                />
            </div>
            <div className="home-content">
            <h2>Hi, Karl</h2>
            <h1>Happy Birthday!!!</h1>
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
              style={{
                color: 'black',
                backgroundColor: 'white',
                borderColor: 'lightgray'
              }}
            >
                <span>Click here</span>
            </button>
            </div>
        </div>
        </>
    );
}

export default HomePage;