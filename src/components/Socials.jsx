import { GitHub, Linkedin, Mail, Phone } from "react-feather";
import React from "react";

export default function Socials() {
  return (
    <>
      <div className="social__links">
        <div className="social__links__entries">
          <a
            href="https://github.com/JeevanJyotiChoudhury"
            target="_blank"
            rel="noreferrer"
            title="github"
            className="social__links__entries__link"
            id="contact-github"
          >
            <GitHub size={20} color="currentColor" />
          </a>
          <a
            href="https://www.linkedin.com/in/jeevanjyoti549/"
            title="linkedin"
            target="_blank"
            rel="noreferrer"
            className="social__links__entries__link"
            id="contact-linkedin"
          >
            <Linkedin size={20} color="currentColor" />
          </a>
          <a
            href="mailto:jeevanjyoti549@gmail.com"
            title="mail"
            target="_blank"
            rel="noreferrer"
            className="social__links__entries__link"
            id="contact-email"
          >
            <Mail size={20} color="currentColor" />
          </a>
          <a
            href="tel:+917978764083"
            title="phone"
            target="_blank"
            rel="noreferrer"
            className="social__links__entries__link"
            id="contact-phone"
          >
            <Phone size={20} color="currentColor" />
          </a>
        </div>
        <div className="social__links__line"></div>
      </div>
      <div className="social__email">
        <a
          href="mailto:chiranjitbehera34@gmail.com"
          className="social__email__text"
        >
          jeevanjyoti549@gmail.com
        </a>
        <div className="social__links__line"></div>
      </div>
    </>
  );
}
