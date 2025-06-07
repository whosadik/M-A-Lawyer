import React, { useState, useEffect } from "react";
import "./Navbar.css";

const sections = [
  { id: "home", label: "Главная" },
  { id: "about", label: "О компании" },
  { id: "services", label: "Услуги" },
  { id: "cases", label: "Кейсы" },
  { id: "contact", label: "Контакты" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -40% 0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 10) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const target = document.getElementById(id);
    if (target) {
      const yOffset = -80;
      const y = target.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <span className="navbar__brand" onClick={() => handleScrollTo("home")}>
          <span className="MA">M&A</span> <br />
          <span className="assist">assistance</span>
        </span>
      </div>

      <div
        className={`navbar__toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div />
        <div />
        <div />
      </div>
      <nav className="navbar__menu">
        {sections.map((section) => (
          <a
            key={section.id}
            onClick={() => handleScrollTo(section.id)}
            className={activeSection === section.id ? "active" : ""}
          >
            {section.label}
          </a>
        ))}
      </nav>

      <nav className={`navbar__menu-mobile ${isOpen ? "active" : ""}`}>
        <div className="navbar__close" onClick={() => setIsOpen(false)}>
          ×
        </div>
        {sections.map((section) => (
          <a
            key={section.id}
            onClick={() => handleScrollTo(section.id)}
            className={activeSection === section.id ? "active" : ""}
          >
            {section.label}
          </a>
        ))}
      </nav>

      <div className="navbar__phone">+7(700) 716 1879</div>
    </header>
  );
};

export default Navbar;
