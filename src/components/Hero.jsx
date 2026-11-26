import React from "react";
import {
  ArrowRight,
  Download,
  Mail,
  Sparkles,
  Terminal,
  Layers,
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { useTypingEffect } from "../hooks/useTypingEffect";
import { GitHubIcon, LinkedInIcon } from "./TechIcons";

export function Hero() {
  const { brand, hero, resume, socialLinks } = portfolioData;
  const typedRole = useTypingEffect(hero.typingRoles);

  return (
    <section id="home" className="hero-section">
      <div className="hero-orb hero-orb-primary" aria-hidden="true" />
      <div className="hero-orb hero-orb-secondary" aria-hidden="true" />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center g-5">
          {/* Left Column: Introduction & CTAs */}
          <div className="col-lg-7 hero-entrance">
            <div className="hero-badge">
              <span className="status-pulse" aria-hidden="true" />
              <span>{brand.availabilityBadge}</span>
            </div>

            <h1 className="hero-heading">
              Hi, I&apos;m{" "}
              <span className="text-gradient">{brand.fullName}</span>
            </h1>

            <div className="hero-typing-row" aria-live="polite">
              <span className="text-muted-custom">&gt;_</span>
              <span className="text-gradient">{typedRole}</span>
              <span className="typing-cursor" aria-hidden="true" />
            </div>

            <p className="hero-subtitle">{hero.supportingText}</p>

            <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
              <a href={hero.primaryCta.href} className="btn-gradient">
                <span>{hero.primaryCta.label}</span>
                <ArrowRight size={18} aria-hidden="true" />
              </a>

              <a
                href={resume.fileUrl}
                download={resume.fileName}
                className="btn-outline-surface"
                title={
                  resume.isPlaceholder
                    ? "Downloads editable resume template (configure in src/data/portfolioData.js)"
                    : "Download Resume PDF"
                }
              >
                <Download size={18} aria-hidden="true" />
                <span>{hero.secondaryCta.label}</span>
              </a>
            </div>

            {/* Social Media Links */}
            <div className="d-flex align-items-center gap-3 pt-2">
              <span className="small text-muted-custom fw-medium">
                Connect:
              </span>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="GitHub Profile"
                title="GitHub Profile (configurable)"
              >
                <GitHubIcon size={19} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile (configurable)"
              >
                <LinkedInIcon size={19} />
              </a>
              <a
                href={`mailto:${socialLinks.email}`}
                className="social-icon-btn"
                aria-label="Send Email"
                title={`Email (${socialLinks.email})`}
              >
                <Mail size={19} />
              </a>
            </div>
          </div>

          {/* Right Column: Profile Placeholder / Creative Developer Code Card */}
          <div className="col-lg-5 hero-entrance-delay">
            <div className="hero-visual-wrapper">
              <div className="hero-floating-chip chip-top">
                <Sparkles size={16} className="text-info" aria-hidden="true" />
                <span>React.js + ES6+</span>
              </div>

              {hero.profileImage ? (
                <div className="surface-card p-3 text-center">
                  <img
                    src={hero.profileImage}
                    alt={`${brand.fullName} — ${brand.title}`}
                    className="img-fluid rounded-4"
                  />
                </div>
              ) : (
                <div
                  className="code-window"
                  role="img"
                  aria-label="Developer profile code preview"
                >
                  <div className="code-window-header">
                    <div className="window-dots" aria-hidden="true">
                      <span style={{ background: "#EF4444" }} />
                      <span style={{ background: "#F59E0B" }} />
                      <span style={{ background: "#10B981" }} />
                    </div>
                    <span className="font-mono small text-muted-custom d-flex align-items-center gap-1">
                      <Terminal size={13} aria-hidden="true" />
                      developer.config.jsx
                    </span>
                  </div>

                  <div className="code-window-body">
                    <div className="code-line">
                      <span className="code-ln">1</span>
                      <span>
                        <span className="tok-kw">const</span>{" "}
                        <span className="tok-fn">developer</span> = {"{"}
                      </span>
                    </div>
                    <div className="code-line">
                      <span className="code-ln">2</span>
                      <span>
                        {"  "}
                        <span className="tok-prop">role</span>:{" "}
                        <span className="tok-str">
                          &apos;Frontend Developer&apos;
                        </span>
                        ,
                      </span>
                    </div>
                    <div className="code-line">
                      <span className="code-ln">3</span>
                      <span>
                        {"  "}
                        <span className="tok-prop">stack</span>: [
                      </span>
                    </div>
                    <div className="code-line">
                      <span className="code-ln">4</span>
                      <span>
                        {"    "}
                        <span className="tok-str">&apos;HTML5&apos;</span>,{" "}
                        <span className="tok-str">&apos;CSS3&apos;</span>,{" "}
                        <span className="tok-str">&apos;Bootstrap&apos;</span>,
                      </span>
                    </div>
                    <div className="code-line">
                      <span className="code-ln">5</span>
                      <span>
                        {"    "}
                        <span className="tok-str">
                          &apos;JavaScript (ES6+)&apos;
                        </span>
                        , <span className="tok-str">&apos;React.js&apos;</span>
                      </span>
                    </div>
                    <div className="code-line">
                      <span className="code-ln">6</span>
                      <span>{"  "}],</span>
                    </div>
                    <div className="code-line">
                      <span className="code-ln">7</span>
                      <span>
                        {"  "}
                        <span className="tok-prop">focus</span>:{" "}
                        <span className="tok-str">
                          &apos;Clean &amp; Responsive UI&apos;
                        </span>
                        ,
                      </span>
                    </div>
                    <div className="code-line">
                      <span className="code-ln">8</span>
                      <span>
                        {"  "}
                        <span className="tok-fn">buildExperience</span>: ()
                        =&gt;{" "}
                        <span className="tok-str">&apos;Seamless&apos;</span>
                      </span>
                    </div>
                    <div className="code-line">
                      <span className="code-ln">9</span>
                      <span>{"}"};</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="hero-floating-chip chip-bottom">
                <Layers
                  size={16}
                  style={{ color: "var(--accent-primary)" }}
                  aria-hidden="true"
                />
                <span>Responsive &amp; Accessible</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
