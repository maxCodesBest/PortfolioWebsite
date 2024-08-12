import React from "react";
import "./AboutMe.css";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Gallery from "./sections/Gallery";
import AboutMeText from "./sections/AboutMeText";

export default function AboutMe() {
  return (
    <div className="aboutMe">
      <ScrollToTop />
      <AboutMeText />
      <Gallery />
    </div>
  );
}
