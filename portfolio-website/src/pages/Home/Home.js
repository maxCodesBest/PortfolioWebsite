import React, { useEffect, useState } from "react";
import "./Home.css";
import { Button } from "../../components/Button/Button";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

function Home() {
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setVideoUrl("");
      } else {
        setVideoUrl("/videos/tripVideo2.mp4");
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);
  }, []); //if anyone ever wonders why this piece of code is here even tho i could solve it via css with display:none which is much smarter, well there was a tiny bug in safari that really didnt deserve the time i wasted on trying to solve it(and this is a home/hobby project) and then i realized this useless code solves it so as the coder and the code reviewer, i accept this funny solution :)

  return (
    <div className="hero-container">
      <ScrollToTop />
      <video src={videoUrl} autoPlay loop muted />
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
  );
}

export default Home;
