import React, { useEffect, useState } from "react";
import "../styles/projects-hero.css";
import beach from "../assets/hero-carousel/beach-cleaning.jpg";
import ganesh from "../assets/hero-carousel/ganesh.jpg";
import newspaper from "../assets/hero-carousel/mewspaper-distri.jpg";
import nasha_mukti from "../assets/hero-carousel/nasha-mukti.jpg";
import online_health from "../assets/hero-carousel/online-health.jpg";
import blood from "../assets/hero-carousel/blood-dono.jpg";
export default function ProjectHero() {
  useEffect(() => {
    document
      .getElementById("parent-magestic-carousel")
      .addEventListener("mouseenter", function () {
        document.getElementById("cursor-following-div").style.display = "block";
        document.addEventListener("mousemove", followMouse);
      });

    document
      .getElementById("parent-magestic-carousel")
      .addEventListener("mouseleave", function () {
        document.getElementById("cursor-following-div").style.display = "none";
        document.removeEventListener("mousemove", followMouse);
      });
  }, []);

  function followMouse(e) {
    var childDiv = document.getElementById("cursor-following-div");
    var parentDiv = document.getElementById("parent-magestic-carousel");

    var parentRect = parentDiv.getBoundingClientRect();

    const x = e.clientX - parentRect.left;
    const y = e.clientY - parentRect.top;

    const maxX = parentRect.width - childDiv.clientWidth;
    const maxY = parentRect.height - childDiv.clientHeight;

    const clampedX = Math.min(maxX, Math.max(0, x));
    const clampedY = Math.min(maxY, Math.max(0, y));

    // Set the position of the absolute element
    childDiv.style.left = `${clampedX}px`;
    childDiv.style.top = `${clampedY}px`;
  }

  const [displayIndex, setDisplayIndex] = useState(0);

  const changeHeroImage = () => {
    const document_scroller = document.getElementById(
      "parent-magestic-carousel"
    );
    setDisplayIndex((prev) => {
      console.log(prev);
      if (prev >= hero_images.length - 1) return 0;
      return prev + 1;
    });
    document_scroller.style.backgroundImage = `url(${hero_images[displayIndex]})`;
    console.log(hero_images[displayIndex]);
  };
  console.log("rerender");

  const hero_images = [
    beach,
    ganesh,
    newspaper,
    nasha_mukti,
    online_health,
    blood,
  ];
  console.log(hero_images);
  return (
    <>
      <div
        className="parent-magestic-carousel"
        id="parent-magestic-carousel"
        onClick={changeHeroImage}
      >
        <div className="cursor-following-div" id="cursor-following-div">
          <div>
            <h3>click to</h3>
            <h2>CHANGE</h2>
          </div>
        </div>
      </div>
      <div className="project-header-text">
        <h3>TCET-NSS UNIT</h3>
        <h4>helping the world, one step at a time</h4>
      </div>
    </>
  );
}
