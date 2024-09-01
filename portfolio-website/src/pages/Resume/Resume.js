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
          <div id="profile">
            <Profile />
          </div>
          <div id="employmentHistory">
            <EmploymentHistory />
          </div>

          <div className="doubleSection" id="languagesAndHobbies">
            <Languages />
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
                key: "languagesAndHobbies",
                href: "#languagesAndHobbies",
                title: "Languages And Hobbies",
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}
