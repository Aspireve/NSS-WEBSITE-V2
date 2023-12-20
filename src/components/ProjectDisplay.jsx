import React from "react";
import "../styles/projects-display.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faHeart,
  faSearch,
  faUserGroup,
  faEarthAmericas,
  faHeartPulse,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import projImage from "../assets/project-beach.jpg";
import { Link } from "react-router-dom";

export default function ProjectDisplay() {
  const domain_names = [
    { name: "All", icon: faHeart },
    { name: "Environment", icon: faEarthAmericas },
    { name: "Education", icon: faBook },
    { name: "Society", icon: faUserGroup },
    { name: "Health", icon: faHeartPulse },
  ];
  const projects_domains = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  const total_projects = 100;
  console.log(domain_names);
  return (
    <div className="projects-display-container">
      <div className="domain-option-filters-containers">
        <div className="domain-option-domains">
          <h4 className="domain-nss-title">TCET-NSS </h4>
          <h3 className="domain-nss-name">PROJECTS</h3>
          <p className="total-projects-available">
            <p>Total Projects: {total_projects}</p>
          </p>
          <h3 className="domain-options-name">DOMAINS</h3>
          <ul className="domain-option-domains">
            {domain_names.map((domain, idx) => (
              <li key={idx} className="project-option p-active">
                <FontAwesomeIcon icon={domain.icon} />
                <h5>{domain.name}</h5>
              </li>
            ))}
          </ul>
        </div>
        <div className="projects-search-bar">
          <input
            className="search-bar-text"
            type="text"
            spellCheck="false"
            placeholder="Search Projects "
          />
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <div className="projects-cards-side">
        {/* <div className="project-cards-container"> */}
        {projects_domains.map((proj) => (
          <Link key={proj} to={"123"} style={{textDecoration: "none"}}>
            <div  className="project-card">
              <img src={projImage} className="project-main-image" />
              <h4 className="project-major-project">
                <FontAwesomeIcon icon={faStar} />
              </h4>
              <h4 className="project-card-title">Beach Cleanup</h4>

              <p className="project-location">
                Aksa Beach, Some place in Mumbai
              </p>
              <div className="project-extra-information">
                <p>Environment</p>
                <p>10 October 2023</p>
              </div>
            </div>
          </Link>
        ))}
        {/* </div> */}
      </div>
    </div>
  );
}
