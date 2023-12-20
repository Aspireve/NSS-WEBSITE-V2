import React, {useEffect} from "react";
import "../styles/home-what-we-do.css";

export default function WhatWeDo() {
  var i = 0;
  var txt = "What we do";
  var speed = 150;
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("what-we-do-header").innerHTML +=
        txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  
  useEffect(() => {
    const whatWeDo = document.querySelectorAll(".what-we-do");

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        whatWeDo[0].classList.add("appear")
        typeWriter();
      }
    }, {
      rootMargin: "-100px"
    });

    window.addEventListener("scroll", () => observer.observe(whatWeDo[0]));
  });
  return (
    <div className="what-we-do">
      <div className="what-we-do-text">
        <h2 id="what-we-do-header" ></h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
          perspiciatis molestias unde, sapiente sit, quam est magni dolorum
          distinctio veniam autem, rem tenetur temporibus quis neque debitis
          itaque enim corrupti. Ducimus doloribus veritatis accusantium voluptas
            maxime, iure ut pariatur recusandae cupiditate perferendis! Porro
            ducimus consectetur distinctio ipsa, pariatur amet deserunt tempora a
            nam commodi eligendi
        </p>
        <button>Learn More</button>
      </div>
      <div className="image-carousel-container">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
