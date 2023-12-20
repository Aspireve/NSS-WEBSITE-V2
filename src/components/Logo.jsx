import React from "react";
import NSS_LOGO from "../assets/nss_logo.svg";

export default function Logo() {
  return (
    <div className="logo-container">
      <img src={NSS_LOGO} alt="NSS Logo" className="logo-image"/>
      <div className="logo-title">
        <h2 >TCET</h2>
        <h5 >NSS UNIT</h5>
      </div>
    </div>
  );
}
