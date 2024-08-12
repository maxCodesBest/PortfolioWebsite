import React from "react";
import { Anchor } from "antd";
import "./Resume.css";
import Profile from "./sections/Profile.js";
import EmploymentHistory from "./sections/EmploymentHistory.js";
import Languages from "./sections/Languages.js";
import Hobbies from "./sections/Hobbies.js";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import "../../commonFiles/commonText.css";

export default function Resume() {
  const offSet = 80;
  return (
    <>
      <ScrollToTop />
      <div className="resume">
        <div className="resumeSide">
          <div className="section" id="profile">
            <Profile />
          </div>
          <div className="section" id="employmentHistory">
            <EmploymentHistory />
          </div>

          <div className="section" id="languages">
            <Languages />
          </div>
          <div className="section" id="hobbies">
            <Hobbies />
          </div>
        </div>

        <div className="anchorSide">
          <Anchor
            offsetTop={offSet}
            replace
            items={[
              {
                key: "profile",
                href: "#profile",
                title: "Profile",
              },
              {
                key: "employmentHistory",
                href: "#employmentHistory",
                title: "Employment History",
                children: [
                  {
                    key: "TransmitEra",
                    href: "#TransmitEra",
                    title: "Transmit Security",
                  },
                  { key: "IdfEra", href: "#IdfEra", title: "IDF" },
                ],
              },
              {
                key: "languages",
                href: "#languages",
                title: "Languages",
              },
              {
                key: "hobbies",
                href: "#hobbies",
                title: "Hobbies",
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}
