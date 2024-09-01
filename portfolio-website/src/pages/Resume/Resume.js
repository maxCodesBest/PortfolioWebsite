import React from "react";
import "./Resume.css";
import Profile from "./sections/Profile.js";
import EmploymentHistory from "./sections/EmploymentHistory.js";
import Languages from "./sections/Languages.js";
import Hobbies from "./sections/Hobbies.js";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import "../../commonFiles/commonText.css";

export default function Resume() {
  return (
    <>
      <ScrollToTop />
      <div className="resume">
        <Profile />
        <EmploymentHistory />
        <div className="doubleSection">
          <Languages />
          <Hobbies />
        </div>
      </div>
    </>
  );
}
