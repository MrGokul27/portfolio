import React from "react";
import { Code } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { Reveal } from "./Reveal";
import { getSkillIcon } from "./TechIcons";

export function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <Reveal>
          <div
            className="text-center mx-auto mb-5"
            style={{ maxWidth: "680px" }}
          >
            <span className="section-eyebrow">
              <Code size={14} aria-hidden="true" />
              {skills.sectionEyebrow}
            </span>
            <h2 className="section-title">{skills.sectionTitle}</h2>
            <p className="section-subtitle mx-auto">{skills.sectionSubtitle}</p>
          </div>
        </Reveal>

        <div className="row g-4 justify-content-center">
          {skills.items.map((skill, index) => (
            <div className="col-md-6 col-lg-4" key={skill.id}>
              <Reveal delay={index * 80} className="h-100">
                <article className="surface-card surface-card-interactive skill-card h-100 d-flex flex-column">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div
                      className="d-inline-flex align-items-center justify-content-center rounded-3 p-2"
                      style={{
                        width: "54px",
                        height: "54px",
                        backgroundColor: "var(--bg-subtle)",
                        border: "1px solid var(--border-subtle)",
                      }}
                    >
                      {getSkillIcon(skill.iconKey, 30)}
                    </div>
                    <span className="font-mono small text-muted-custom">
                      {skill.category}
                    </span>
                  </div>

                  <h3 className="h4 fw-bold mb-2">{skill.name}</h3>
                  <p className="small text-muted-custom mb-3 flex-grow-1">
                    {skill.description}
                  </p>

                  <div className="d-flex flex-wrap gap-2">
                    {skill.highlights.map((tag) => (
                      <span className="tech-pill" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Decorative hover progress-style accent bar (no fabricated proficiency percentage) */}
                  <div className="skill-accent-line" aria-hidden="true">
                    <div
                      className="skill-accent-fill"
                      style={{
                        background: `linear-gradient(90deg, ${skill.accent}, var(--accent-secondary))`,
                      }}
                    />
                  </div>
                </article>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
