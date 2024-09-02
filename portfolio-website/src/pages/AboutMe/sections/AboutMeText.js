import React from "react";
import "../../../commonFiles/commonText.css";

function AboutMeText() {
  return (
    <div className="section">
      <h1>General</h1>
      <p>
        Hi, I'm Max! Besides the stellar resume you’ll find on this site (wink,
        wink—check it out!), here’s a bit more about me:
        <br />
        I’m fluent in Spanish and, according to my girlfriend, I might love dogs
        a bit too much. I’m known for being friendly, a team player, and I
        always have a quirky joke up my sleeve.
      </p>
      <h1 style={{ marginTop: "6%" }}>The cool stuff</h1>
      <div className="bullets">
        <p>
          • I’m a certified sommelier with WSET Level 2 and Level 3
          qualifications (yes, I look cool when I taste wine).
          <br />
          • As a certified bartender and mixologist, I’m pretty good at crafting
          cocktails.
          <br />
          • Carpentry is a passion of mine, and I’ve taken several courses to
          hone my skills.
          <br />
          • I’m also into gardening and have completed a few courses to grow my
          green thumb.
          <br />
          • Martial arts have been a lifelong pursuit for me; I practice Judo,
          Jiu-Jitsu, and Muay Thai (Thai boxing).
          <br />
          • Although I don’t ride anymore after a major accident, I can chat
          about motorcycles for hours.
          <br />
          • I’m contemplating my next challenge—either learning Italian or
          pursuing professional cooking. If you have thoughts on this, feel free
          to share them in the Contact Me page!
          <br />
        </p>
      </div>
    </div>
  );
}

export default AboutMeText;
