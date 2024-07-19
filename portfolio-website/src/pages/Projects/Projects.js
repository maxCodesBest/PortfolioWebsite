import React from "react";
import "./Projects.css";
import Cards from "../../components/Cards/Cards";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

export default function Projects() {
  const cards = [
    {
      src: "images/projects/githubPurpleLogo.webp",
      text: "My general GitHub profile",
      label: "General",
      path: "https://github.com/maxjud2904",
    },
    {
      src: "images/projects/HomePageScreenshot.png",
      text: "Portfolio website - Source code for this website",
      label: "FrontEnd",
      path: "https://github.com/maxjud2904/PortfolioWebsite",
    },
    {
      src: "images/projects/TastingTerroir.jpg",
      text: "Tasting terroir - Wine tasting notes website",
      label: "FullStack",
      path: "https://github.com/maxjud2904/TastingTerroir",
    },
  ];
  return (
    <div className="projects">
      <ScrollToTop />
      <Cards cards={cards} />
    </div>
  );
}
