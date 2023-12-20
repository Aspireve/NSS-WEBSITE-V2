import React, {useEffect} from "react";
import education from "../assets/education.png";
import health from "../assets/health.png";
import society from "../assets/society.png";
import "../styles/home-recent-projects.css";

const projectDescription = [
  {
    image: education,
    domain: "EDUCATION",
    title: "Poster Making ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, voluptates?",
  },
  {
    image: health,
    domain: "HEALTH",
    title: "Organ Donation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, voluptates?",
  },
  {
    image: society,
    domain: "SOCIETY",
    title: "Clean India, Green India",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, voluptates?",
  },
];

export default function RecentProjects() {
  var i = 0;
  var txt = "Recent Projects";
  var speed = 150;
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("home-projects-header").innerHTML +=
        txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  
  useEffect(() => {
    const recentProjects = document.querySelectorAll(".recent-projects-container");

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        recentProjects[0].classList.add("appear")
        typeWriter();
      }
    }, {
      rootMargin: "-100px"
    });

    window.addEventListener("scroll", () => observer.observe(recentProjects[0]));
  });
  return (
    <div className="recent-projects-container">
      <h2 className="home-projects-header" id="home-projects-header"></h2>
      <div className="prioject-class-container">
        {projectDescription.map((project) => (
          <div key={project.title} className="recent-project-card">
            <img src={project.image} alt="project" />
            <h4 className="recent-project-domain">{project.domain}</h4>
            <h3 className="recent-project-title">{project.title}</h3>
            <p className="recent-project-short-description">
              {project.description}
            </p>
            <div className="responsive-project-text">
            <h4 className="recent-project-domain">{project.domain}</h4>
            <h3 className="recent-project-title">{project.title}</h3>
            <p className="recent-project-short-description">
              {project.description}
            </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
