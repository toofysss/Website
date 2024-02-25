import React, { useState, useEffect, useRef } from "react";
import logo from "../../Asset/logo.png";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const [t, il8n] = useTranslation();
  const dropdownRef = useRef(null);

  const handleMenuClick = (event) => {
    event.stopPropagation();
    setMenuOpen(!isMenuOpen);
  };

  const handleDropdownChange = (e) => {
    const selectedLanguage = e.target.value;
    il8n.changeLanguage(selectedLanguage);
    setSelectedLanguage(selectedLanguage);
    setMenuOpen(false);
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

  const handleBodyClick = (event) => {
    if (isMenuOpen && !dropdownRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleBodyClick);

    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, [isMenuOpen]);

  return (
    <header dir={il8n.language == "en" ? "ltr" : "rtl"} className="header">
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
          {t("N1")}
        </a>
        <a
          href="#about"
          className={selectedLink === "about" ? "active" : ""}
          onClick={(e) => handleLinkClick("about", e)}
        >
          {t("N2")}
        </a>
        <a
          href="#eduction"
          className={selectedLink === "eduction" ? "active" : ""}
          onClick={(e) => handleLinkClick("eduction", e)}
        >
          {t("N3")}
        </a>
        <a
          href="#experience"
          className={selectedLink === "experience" ? "active" : ""}
          onClick={(e) => handleLinkClick("experience", e)}
        >
          {t("N4")}
        </a>
        <a
          href="#Skills"
          className={selectedLink === "Skills" ? "active" : ""}
          onClick={(e) => handleLinkClick("Skills", e)}
        >
          {t("N5")}
        </a>
        <a
          href="#project"
          className={selectedLink === "project" ? "active" : ""}
          onClick={(e) => handleLinkClick("project", e)}
        >
          {t("N6")}
        </a>
        <div ref={dropdownRef}>
          <select
            name="language"
            className="dropdown-select"
            onChange={handleDropdownChange}
            defaultValue={selectedLanguage}
          >
            <option disabled>
              {t("lang")}
            </option>
            <option
              className={`navbartext ${
                selectedLanguage === "en" ? "selected" : ""
              }`}
              defaultValue="en"
            >
              {t("En")}
            </option>
            <option
              className={`navbartext ${
                selectedLanguage === "ar" ? "selected" : ""
              }`}
              defaultValue="ar"
            >
              {t("Ar")}
            </option>
          </select>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
