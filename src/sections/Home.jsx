import React from "react";
import Hero from "../components/Hero";
import WhoAreWe from "../components/WhoAreWe";
import WhatWeDo from "../components/WhatWeDo";
import Achievements from "../components/Achievements";
import Map from "../components/Map";
import Testimonials from "../components/Testimonials";
import Socials from "../components/Socials";
import RecentProjects from "../components/RecentProjects";
import Domains from "../components/Domains"
import Objectives from "../components/Objectives"

export default function Home() {
  return (
    <>
      {/* <div style={{height: "100vh", width: '100%', background:"#333"}}></div>
      <div style={{height: "100vh", width: '100%', background:"#fff"}}></div> */}
      <Hero />
      <WhoAreWe />
      <WhatWeDo />
      <Objectives />
      <Domains />
      <Achievements />
      <RecentProjects />
      <Testimonials />
      <Socials />
      <Map />
    </>
  );
}
