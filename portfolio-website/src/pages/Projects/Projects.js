import React from "react";
import "./Projects.css";
import Cards from "../../components/Cards/Cards";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

export default function Projects() {
  const cards = [
    {
      src: "images/projects/githubPurpleLogo.jpg",
      text: "My general GitHub profile",
      label: "General",
      path: "https://github.com/maxCodesBest",
    },
    {
      src: "images/projects/HomePageScreenshot.jpg",
      text: "Portfolio website - Source code for this website",
      label: "FrontEnd",
      path: "https://github.com/maxCodesBest/PortfolioWebsite",
    },
    {
      src: "images/projects/TastingTerroir.jpg",
      text: "Tasting terroir - Wine tasting notes website",
      label: "FullStack",
      path: "https://github.com/maxCodesBest/TastingTerroir",
    },
  ];
  return (
    <div className="projects">
      <ScrollToTop />
      <Cards cards={cards} />
    </div>
  );
}
