import React, { useState, useEffect } from "react";
import logo from "../../Asset/logo.png";
function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);

  const handleMenuClick = (event) => {
    event.stopPropagation();
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (linkId, event) => {
    setMenuOpen(false);
    setSelectedLink(linkId);
    const targetSection = document.getElementById(linkId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
    event.preventDefault();
  };

  const handleBodyClick = () => {
    if (isMenuOpen) {
      setMenuOpen(false);
    }
  };
  useEffect(() => {
    document.body.addEventListener("click", handleBodyClick);
    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  });

  return (
    <header className="header">
      <h1 href="#" className="logo">
        <img src={logo} alt=""></img>
      </h1>
      <i className="bx bx-menu" id="menu-icon" onClick={handleMenuClick}></i>
      <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
        <a
          href="#home"
          className={
            selectedLink === null || selectedLink === "home" ? "active" : ""
          }
          onClick={(e) => handleLinkClick("home", e)}
        >
          Home
        </a>
        <a
          href="#about"
          className={selectedLink === "about" ? "active" : ""}
          onClick={(e) => handleLinkClick("about", e)}
        >
          About
        </a>
        <a
          href="#eduction"
          className={selectedLink === "eduction" ? "active" : ""}
          onClick={(e) => handleLinkClick("eduction", e)}
        >
          Education
        </a>
        <a
          href="#experience"
          className={selectedLink === "experience" ? "active" : ""}
          onClick={(e) => handleLinkClick("experience", e)}
        >
          Experience
        </a>
        <a
          href="#Skills"
          className={selectedLink === "Skills" ? "active" : ""}
          onClick={(e) => handleLinkClick("Skills", e)}
        >
          Skills
        </a>
        <a
          href="#project"
          className={selectedLink === "project" ? "active" : ""}
          onClick={(e) => handleLinkClick("project", e)}
        >
          Project
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
