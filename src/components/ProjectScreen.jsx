import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/projects-screen.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import beach1 from "../assets/beach1.jpg"
import beach2 from "../assets/beach2.jpg"
import beach3 from "../assets/beach3.jpg"
import beach4 from "../assets/beach4.jpg"

export default function ProjectScreen() {
  console.log(useParams());
  const same_project_images = [beach1, beach2, beach3, beach4]
  const [displayImageIndex, setDisplayImageIndex] = useState(0)
    const displayPrevious = () => {
        setDisplayImageIndex((prev) => {
            if(prev === 0) return same_project_images.length -1
            return prev - 1
        })
    }
    const displayNext = () => {
        setDisplayImageIndex((prev) => {
            if(prev === same_project_images.length -1) return 0
            return prev + 1
        })
    }
  return (
    <div className="project-full-details-container">
      <div className="project-left-side">
        <div className="same-project-image-carousel">
          <div className="same-proj-display-image">
            <img className="same-project-image" src={same_project_images[displayImageIndex]} />
            <div className="same-project-image-controls">
              <FontAwesomeIcon icon={faAngleLeft} onClick={displayPrevious}/>
              <FontAwesomeIcon icon={faAngleRight} onClick={displayNext}/>
            </div>
          </div>

          <div className="same-project-carousel-images">
            {same_project_images.map((image_proj, idx) => 
                <img key={idx} className={displayImageIndex === idx ? "same-project-carousel-images-active" : ""} src={image_proj} onClick={() => setDisplayImageIndex(idx)}/>
            )}
          </div>
        </div>
        <h3 className="same-project-title">Beach Clean Up Project</h3>
        <div className="same-project-desc">
          <p>Domain: Environment</p>
          <p>Date: 10 October 2023</p>
        </div>
        <div className="same-project-location">
          Aksa Beach, Somewhere in Mumbai
        </div>
        <div className="same-project-summary">
          <h2>Summary</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
            molestias, quo ad possimus nemo reprehenderit facere? Alias incidunt
            reprehenderit sed neque nisi porro dicta exercitationem, nihil iste
            quas vel nostrum molestiae modi magnam nulla in maxime, ea tempore
            enim beatae id tempora. Debitis tempore consequuntur quaerat iusto
            dolor id quae.
          </p>
        </div>
      </div>
      <div className="project-right-side">
        <h3 className="same-project-r-title">REPORT</h3>
        <div className="same-project-report">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          doloremque molestias quasi libero atque suscipit minus dolores cumque
          provident voluptate cum blanditiis, dolorum est ab? Earum doloribus ab
          voluptatem perferendis distinctio reiciendis voluptate officiis,
          aliquid, atque vel quisquam porro asperiores pariatur consequatur
          inventore consectetur deserunt esse. Debitis, unde aliquam, officiis
          doloremque expedita omnis delectus placeat dolor dicta voluptatum
          architecto eius. Accusantium magni nobis exercitationem omnis, quod
          animi ad doloribus soluta numquam recusandae? Numquam blanditiis
          deserunt em perferendis distinctio reiciendis voluptate officiis,
          aliquid, atque vel quisquam porro asperiores pariatur consequatur
          inventore consectetur deserunt esse. Debitis, unde aliquam, officiis
          doloremque expedita omnis delectus placeat dolor dicta voluptatum
          architecto eius. Accusantium magni nobis exercitationem omnis, quod
          animi ad doloribus soluta numquam recusandae? Numquam blanditiis
          deserunt
        </div>
        <h3 className="same-project-f-title">FEEDBACK</h3>
        <ul className="same-project-feedback-list">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa
            quo a est maiores, similique explicabo eos modi vel debitis!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa
            quo a est maiores, similique explicabo eos modi vel debitis!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa
            quo a est maiores, similique explicabo eos modi vel debitis!
          </li>
        </ul>
      </div>
    </div>
  );
}
