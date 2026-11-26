import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { GitHubIcon, LinkedInIcon } from "./TechIcons";

export function Footer() {
  const { brand, navLinks, socialLinks } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="py-5 border-top"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--border-subtle)",
      }}
    >
      <div className="container">
        <div className="row gy-4 align-items-center justify-content-between">
          <div className="col-md-4">
            <a className="brand-logo mb-2" href="#home">
              <span className="brand-mark" aria-hidden="true">
                {brand.monogram}
              </span>
              <span>{brand.logoText}</span>
            </a>
            <p className="small text-muted-custom mb-0">
              Frontend Developer crafting responsive, accessible, and clean web
              applications.
            </p>
          </div>

          <div className="col-md-5">
            <nav aria-label="Footer navigation">
              <ul className="list-unstyled d-flex flex-wrap justify-content-md-center gap-3 mb-0">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="small text-decoration-none text-muted-custom fw-medium"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="col-md-3 d-flex align-items-center justify-content-md-end gap-2">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="GitHub Profile"
            >
              <GitHubIcon size={18} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon size={18} />
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              className="social-icon-btn"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="theme-toggle-btn ms-1"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        <hr className="my-4" style={{ borderColor: "var(--border-subtle)" }} />

        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2 small text-muted-custom">
          <span>
            &copy; {currentYear} {brand.copyrightOwner}. Built with React.js
            &amp; Bootstrap 5.
          </span>
          <button
            type="button"
            onClick={scrollToTop}
            className="btn btn-link btn-sm p-0 text-decoration-none text-muted-custom d-inline-flex align-items-center gap-1"
          >
            <span>Back to top</span>
            <ArrowUp size={14} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
