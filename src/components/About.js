import React from "react";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

function About() {

    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate("/home");
    }

    return (
        <div className="about-div">
        <NavBar />
        <h1>6th February, 2025</h1>
        <h2>I feel so guilty that I missed your 15th to 18th birthdays and I'm going to make up for it in every way I can.
            <br />
            You're actually 19 omg I can't believe I've known you for YEARS. You're the greatest blessing not just in my
            <br />
            life but in that of those who know you as well. It's been the greatest privilege ever to see you grow into the
            <br />
            amazing man you've become for the two and a half years we were together, and counting (YAYYYYY). You're my twin
            <br />
            flame, ny other half, my soulmate, my heart and my life. You light up every room you walk into and bring so much
            <br />
            joy and peace to countless people's lives (mine excluded🙄). Being a stranger, to your friend and eventually your
            <br />
            girlfriend has by far been my best experience in life, just being around you and watching you grow in so many
            <br />
            ways. You're my inspiration Karl, you push me to become a better person. God's given you another year round the
            <br />
            sun and I know it'll be your best one yet. You'll get to see so many of your dreams become reality and all of
            <br />
            worries disappear. You stand out in the whole universe, you have the perfect smile, the perfect laugh, the
            <br />
            perfect voice, the greatest sense of humor, you're so intelligent, so so SO SO SO HANDSOME, the hair I want my kids
            <br />
            to have, the compassion I aspire to have, the most ethereal pair of eyes I've ever seen I could stare into them
            <br />
            for eternity, your patience is to die for, you have an impeccable fashion taste, exquisite music taste and let's
            <br />
            not forget you put me on to anime, you have the greatest mindset, your ambitious nature is to die for, you're the
            <br />
            light in everyone's life, you are the most nature person I've ever met, you are top-level at basketball, you have
            <br />
            immense and intense aura, you have calming energy, you are so trusthworthy, you bring comfort, you give a sense of
            <br />
            home, you are love, you are heaven-sent, through you I see God's generosity for giving me my biggest blessing, God's
            <br />
            love through you as a person and God knows just how much I need you in my life. I can't wait for you to celebrate a
            <br />
            lifetime of birthdays, each better than the previous. I really hope you have the most amazing day today, full of 
            <br />
            laughter and love. Happy 19th birthday baby, I love you endlessly, always and forever❤️
        </h2>
        <button
              onClick={handleButtonClick}
              type="button"
              className="login-button btn btn-outline-info"
            >
                <span>Go back</span>
            </button>
        </div>
    );
}

export default About;