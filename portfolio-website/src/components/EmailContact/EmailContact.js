import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./EmailContact.css";
import { notification } from "antd";

const openNotification = () => {
  notification.open({
    message: "Message sent successfully",
    description:
      "Thank you for contacting me! I'll respond to the mentioned Email as soon as possible.",
    placement: "topLeft",
  });
};

export const EmailContact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_ccwyknj", "template_xzagawy", form.current, {
      publicKey: "58fAraO5qmp0c3AIx",
    });

    e.target.reset();
    openNotification();
  };

  return (
    <form className="contactForm" ref={form} onSubmit={sendEmail}>
      <input
        className="contactElement"
        placeholder="Enter your name"
        type="text"
        name="user_name"
      />
      <input
        className="contactElement"
        placeholder="Enter a vaild email address"
        type="email"
        name="user_email"
      />
      <textarea
        className="contactElement"
        placeholder="Enter your message"
        name="message"
      />
      <input type="submit" value="Submit" className="contactButton" />
    </form>
  );
};
