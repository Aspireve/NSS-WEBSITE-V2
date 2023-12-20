import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Logo from "../components/Logo";
import NavMenu from "../components/NavMenu";
import Sidebar from "../components/Sidebar";
import "../styles/navbar.css";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [navabarClass, setnavbarClass] = useState("")
  const openSidebar = () => {
    setSidebar((prev) => !prev);
  };
  
  
  const changeNavbarStyles = () => {
    if(window.scrollY > 0 && window.scrollY < 530) {
      setnavbarClass(() => "gradient-navbar")
    } else if (window.scrollY > 530) {
      setnavbarClass(() => "solid-color-navbar")
    }
    else {
      setnavbarClass(() => "")
    }
  }

  window.addEventListener("scroll", changeNavbarStyles)
  
  return (
    <nav className={navabarClass}>
      <div className="navbar-container">
        <Logo />
        {sidebar ? (
          <FontAwesomeIcon
          className="menu-bar"
          icon={faXmark}
          onClick={openSidebar}
          style={{color: "white", borderColor: "white"}}
        />
        ) : (
          <FontAwesomeIcon
            icon={faBars}
            className="menu-bar"
            onClick={openSidebar}
          />
        )}
        <Sidebar open={sidebar}/>
        <NavMenu />
      </div>
    </nav>
  );
}
