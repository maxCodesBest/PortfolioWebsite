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
          src={"images/profile.webp"}
        />
      </div>
      <div className="spacer"></div>
      <div className="hero-container">
        <h1>HELLO THERE!</h1>
        <p>
          Everything here is personally crafted to provide a comprehensive view
          of my professional experience and skills.
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
