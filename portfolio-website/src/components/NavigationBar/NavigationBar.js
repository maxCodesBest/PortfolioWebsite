import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./NavigationBar.css";

function NavigationBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navigationBar">
        <div className="navigationBar-container">
          <Link to="/" className="navigationBar-logo" onClick={closeMobileMenu}>
            Max Judkevitch
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "navigation-menu active" : "navigation-menu"}>
            <li className="navigation-item">
              <Link
                to="/"
                className="navigation-links"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="navigation-item">
              <Link
                to="/resume"
                className="navigation-links"
                onClick={closeMobileMenu}
              >
                Resume
              </Link>
            </li>
            <li className="navigation-item">
              <Link
                to="/projects"
                className="navigation-links"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className="navigation-item">
              <Link
                to="/aboutMe"
                className="navigation-links"
                onClick={closeMobileMenu}
              >
                About Me
              </Link>
            </li>
            <li className="navigation-item">
              <Button buttonStyle="btn--outline" onClick={closeMobileMenu}>
                Contact Me{" "}
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;
