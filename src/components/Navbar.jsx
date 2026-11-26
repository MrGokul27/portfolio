import React, { useState, useEffect } from "react";
import { Sun, Moon, Download, Menu, X } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function Navbar({ theme, onToggleTheme, activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky-top portfolio-navbar ${isScrolled ? "is-scrolled" : ""}`}
    >
      <nav
        className="navbar navbar-expand-lg py-2"
        aria-label="Primary navigation"
      >
        <div className="container">
          <a className="brand-logo" href="#home" onClick={handleNavClick}>
            <span className="brand-mark" aria-hidden="true">
              {portfolioData.brand.monogram}
            </span>
            <span>{portfolioData.brand.logoText}</span>
          </a>

          {/* Mobile Controls */}
          <div className="d-flex align-items-center gap-2 d-lg-none">
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              type="button"
              className="theme-toggle-btn"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="collapse navbar-collapse d-none d-lg-flex justify-content-between align-items-center">
            <ul className="navbar-nav mx-auto mb-0 gap-1">
              {portfolioData.navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li className="nav-item" key={link.id}>
                    <a
                      className={`nav-link nav-link-custom ${isActive ? "active" : ""}`}
                      href={`#${link.id}`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="d-flex align-items-center gap-2">
              <button
                type="button"
                className="theme-toggle-btn"
                onClick={onToggleTheme}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <a
                href={portfolioData.resume.fileUrl}
                download={portfolioData.resume.fileName}
                className="btn-gradient btn-sm px-3 py-2"
                title={
                  portfolioData.resume.isPlaceholder
                    ? "Downloads editable resume template (replace in public/)"
                    : "Download Resume"
                }
              >
                <Download size={16} aria-hidden="true" />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="container d-lg-none" id="mobile-nav-menu">
            <div className="mobile-menu-panel">
              <ul className="navbar-nav gap-1 mb-3">
                {portfolioData.navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <li className="nav-item" key={link.id}>
                      <a
                        className={`nav-link nav-link-custom rounded-3 ${isActive ? "active" : ""}`}
                        href={`#${link.id}`}
                        onClick={handleNavClick}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <a
                href={portfolioData.resume.fileUrl}
                download={portfolioData.resume.fileName}
                className="btn-gradient w-100"
                onClick={handleNavClick}
              >
                <Download size={16} aria-hidden="true" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
