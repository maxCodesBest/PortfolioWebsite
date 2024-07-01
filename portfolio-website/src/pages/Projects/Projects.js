import React from "react";
import "./Projects.css";
import Cards from "../../components/Cards/Cards";

export default function Projects() {
  const cards = [
    {
      src: "images/githubPurpleLogo.webp",
      text: "My general GitHub profile",
      label: "General",
      path: "https://github.com/maxjud2904",
    },
    {
      src: "images/HomePageScreenshot.png",
      text: "Source code for this website",
      label: "FrontEnd",
      path: "https://github.com/maxjud2904/PortfolioWebsite",
    },
  ];
  return (
    <div className="projects">
      <Cards cards={cards} />
    </div>
  );
}
