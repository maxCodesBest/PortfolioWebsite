import React from "react";
import "./Home.css";
import { Button } from "../../components/Button/Button";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

function Home() {
  return (
    <div className="home-container">
      <ScrollToTop />
      <div className="profile-container">
        <img
          className="profile-image"
          alt="profile"
          src={"images/profile.png"}
        />
      </div>
      <div className="spacer"></div>
      <div className="hero-container">
        <h1>HELLO THERE!</h1>
        <p>
          Please note this website was made 100% by me.
          <br /> You will find here my contact info, my resume, every private
          project I ever worked on and every interesting detail about me.
        </p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            to="/resume"
          >
            RESUME
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            CONTACT ME <i class="fa-regular fa-envelope" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
