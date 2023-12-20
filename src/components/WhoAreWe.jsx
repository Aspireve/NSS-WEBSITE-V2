import React, { useEffect } from "react";
import nss_logo from "../assets/nss_logo.svg";
import "../styles/home-about.css";

export default function WhoAreWe() {
  var i = 0;
  var txt = "Who are we";
  var speed = 150;
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("about-us-text-header").innerHTML +=
        txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  
  useEffect(() => {
    const whoAreWeTitle = document.querySelectorAll(".about-us");

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        whoAreWeTitle[0].classList.add("appear")
        typeWriter();
      }
    }, {
      rootMargin: "-100px"
    });

    window.addEventListener("scroll", () => observer.observe(whoAreWeTitle[0]));
  });

  return (
    <div className="about-us">
      <div className="nss-logo-container image-wrapper">
        <img src={nss_logo} alt="NSS LOGO" />
      </div>
      <div className="about-us-text">
        <h2 id="about-us-text-header"> </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          laboriosam delectus, porro voluptatum ex cupiditate repellendus
          aliquam illum harum, libero fugit voluptas. Quod cum odit modi nam ab!
          Atque nobis dolorum excepturi laboriosam corporis quos iste aperiam
          aliquam nemo minima! Voluptatibus dignissimos ipsa laborum officia
          consequuntur iure illo reiciendis, perspiciatis sed tenetur in numquam
          molestias dolorum, quibusdam amet incidunt beatae!
        </p>
        <button>Learn More</button>
      </div>
    </div>
  );
}
