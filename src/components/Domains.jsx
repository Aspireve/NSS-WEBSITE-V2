import React, {useEffect} from "react";
import eduaction from "../assets/education.png";
import health from "../assets/domain-health.png";
import society from "../assets/society.png";
import environment from "../assets/community_engagement.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "../styles/home-domains.css";

const domaintext = [
  {
    title: "EDUCATION",
    image: eduaction,
    description:
      "Culpa natus sequi aliquam odit excepturi totam, quaerat at ut reiciendis asperiores quidem est, dicta commodi nam iusto, esse ipsam praesentium. Accusamus architecto ullam cupiditate. Iure.",
  },
  {
    title: "ENVIRONMENT",
    image: environment,
    description:
      "Culpa natus sequi aliquam odit excepturi totam, quaerat at ut reiciendis asperiores quidem est, dicta commodi nam iusto, esse ipsam praesentium. Accusamus architecto ullam cupiditate. Iure.",
  },
  {
    title: "SOCIETY",
    image: society,
    description:
      "Culpa natus sequi aliquam odit excepturi totam, quaerat at ut reiciendis asperiores quidem est, dicta commodi nam iusto, esse ipsam praesentium. Accusamus architecto ullam cupiditate. Iure.",
  },
  {
    title: "HEALTH",
    image: health,
    description:
      "Culpa natus sequi aliquam odit excepturi totam, quaerat at ut reiciendis asperiores quidem est, dicta commodi nam iusto, esse ipsam praesentium. Accusamus architecto ullam cupiditate. Iure.",
  },
];

export default function Domains() {
  var i = 0;
  var txt = "Our Domains";
  var speed = 150;
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("home-domains-header").innerHTML +=
        txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  
  useEffect(() => {
    const ourObjectives = document.querySelectorAll(".home-domains-container");

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
    <div className="home-domains-container">
      <div className="home-domains-header" id="home-domains-header"></div>
      <div className="domains-chart-container">
        {domaintext.map((domain) => (
          <div key={domain.title} className="home-domains-chart">
            <div className="home-domains-chart-image-container">
              <img src={domain.image} />
              <div className="see-more-domains-container">
                <FontAwesomeIcon icon={faPlus} className="see-more-domains" />
              </div>
            </div>
            <div className="domains-chart-text">
              <h2 className="domains-chart-header">{domain.title}</h2>
              <hr />
              <p className="domains-chart-passage">{domain.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
