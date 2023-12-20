import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/home-socials.css";

export default function Socials() {
  return (
    <div className="home-socials-container">
      <h3 className="home-socials-header">Socials</h3>
      <p className="home-socials-quote">
        Follow our socials to get the most recent updates about all our projects
      </p>
      <div className="socials-icon-links">
        <div className="social-icon">
          <FontAwesomeIcon className="facebook" icon={faFacebook} />
          <p>@tcetnss</p>
        </div>
        <div className="social-icon">
          <FontAwesomeIcon className="instagram" icon={faInstagram} />
          <p>@tcetnss</p>
        </div>
        <div className="social-icon">
          <FontAwesomeIcon className="linkedin" icon={faLinkedinIn} />
          <p>@tcetnss</p>
        </div>
        <div className="social-icon">
          <FontAwesomeIcon className="twitter" icon={faSquareXTwitter} />
          <p>@tcetnss</p>
        </div>
      </div>
    </div>
  );
}
