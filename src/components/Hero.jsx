import React  from 'react'
import heroImg from "../assets/hero-section.jpg"
import "../styles/home-hero.css"

export default function Hero() {
  
  return (
    <div  className='hero-section'>
        <div className='hero-image'>
            <img src={heroImg} alt='NSS Council and Volunteers' loading='lazy' />
        </div>
        <div className='hero-text'>
            <h2>TCET-NSS UNIT</h2>
            <h3>Not me but You</h3>
        </div>
    </div>
  )
}
