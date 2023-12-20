import React, { useEffect } from "react";
import "../styles/home-testimonials.css";
import TestimonialCard from "./TestimonialCard";


export default function Testimonials() {

  var i = 0;
  var txt = "Testimonials";
  var speed = 150;
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("testimonials-header").innerHTML +=
        txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  
  useEffect(() => {
    const testimonials = document.querySelectorAll(".testimonial");

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        testimonials[0].classList.add("appear")
        typeWriter();
      }
    }, {
      rootMargin: "-100px"
    });

    window.addEventListener("scroll", () => observer.observe(testimonials[0]));
  });



  return (
    <div className="testimonial">
      <h2 id="testimonials-header"></h2>
      <TestimonialCard />
    </div>
  );
}
