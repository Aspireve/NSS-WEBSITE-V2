import React, { useEffect } from "react";
import assesment from "../assets/assesment_and_engagement.png";
import community from "../assets/community_engagement.png";
import competance from "../assets/competence_development.png";
import leadership from "../assets/no-of-volunteers.png";
import "../styles/home-objectives.css";

const objectiveText = [
  {
    image: community,
    title: "Community Understanding",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, fugit itaque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, fugit itaque Lorem, ipsum dolor ",
  },
  {
    image: assesment,
    title: "Assesment & Engagement",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, fugit itaque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, fugit itaque Lorem, ipsum dolor ",
  },
  {
    image: competance,
    title: "Competence Development",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, fugit itaque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, fugit itaque Lorem, ipsum dolor ",
  },
  {
    image: leadership,
    title: "Leadership & Democracy",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, fugit itaque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, fugit itaque Lorem, ipsum dolor ",
  },
];

export default function Objectives() {
  var i = 0;
  var txt = "Our Objectives";
  var speed = 150;
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("home-objective-header").innerHTML +=
        txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  
  useEffect(() => {
    const ourObjectives = document.querySelectorAll(".home-objective-container");

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        ourObjectives[0].classList.add("appear")
        typeWriter();
      }
    }, {
      rootMargin: "-100px"
    });

    window.addEventListener("scroll", () => observer.observe(ourObjectives[0]));
  });

  return (
    <div className="home-objective-container">
      <h2 className="home-objective-header" id="home-objective-header"></h2>
      <p className="home-objective-quote">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, fugit
        itaque corrupti accusantium ad cum aspernatur assumenda quis consequatur
        consequuntur iure sit iste eaque suscipit.
      </p>
      <div className="home-objective-cards-container">
        {objectiveText.map((text) => (
          <div key={text.title} className="home-objective-card">
            <img
              src={text.image}
              className="home-objective-card-image"
              alt="objective card"
            />
            <div className="home-objective-card-text ">
              <h2>{text.title}</h2>
              <p >{text.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
