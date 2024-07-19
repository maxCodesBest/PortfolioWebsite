import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              Max Judkevitch
            </Link>
          </div>
          <small class="website-rights">MJ © 2024</small>
          <div class="social-icons">
            <Link
              class="social-icon-link instagram"
              to="https://www.instagram.com/max_judkevitch/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="https://www.linkedin.com/in/max-judkevitch/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="https://github.com/maxjud2904"
              target="_blank"
              aria-label="GitHub"
            >
              <i class="fa-brands fa-github"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
