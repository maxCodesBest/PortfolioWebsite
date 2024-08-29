import React from "react";
import "./ContactMe.css";
import { EmailContact } from "../../components/EmailContact/EmailContact";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

export default function ContactMe() {
  return (
    <div className="contact-container">
      <ScrollToTop />
      <div className="contactMe">
        <h1>Contact Me</h1>
        <p>
          <i class="fa-regular fa-envelope icon" />
          contact@max-judkevitch.com
        </p>
        <p>
          <i class="fa fa-phone icon" />
          052-618-2184
        </p>
        <p>
          <i class="fa-brands fa-github icon"></i>
          maxjud2904
        </p>
        <p>
          <i class="fa-regular fa-heart icon"></i>Please like and subscribe{" "}
          <br />
          (please tell me you got the joke)
        </p>
      </div>
      <div className="EmailContactForm">
        <EmailContact />
      </div>
    </div>
  );
}
