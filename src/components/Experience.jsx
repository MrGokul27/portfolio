import React from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  FolderOpen,
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { Reveal } from "./Reveal";

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section-padding section-alt">
      <div className="container">
        <Reveal>
          <div className="mb-5">
            <span className="section-eyebrow">
              <Briefcase size={14} aria-hidden="true" />
              {experience.sectionEyebrow}
            </span>
            <h2 className="section-title">{experience.sectionTitle}</h2>
            <p className="section-subtitle">{experience.sectionSubtitle}</p>
          </div>
        </Reveal>

        <div className="timeline-wrapper">
          {experience.items.map((item, index) => (
            <Reveal
              delay={index * 100}
              key={item.id}
              className="timeline-item mb-4"
            >
              <span className="timeline-dot" aria-hidden="true" />

              <article className="surface-card surface-card-interactive p-4 p-md-5">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-start gap-3 mb-4">
                  <div>
                    <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
                      <span className="tech-pill font-mono">
                        {item.companyName}
                      </span>
                      {item.isPlaceholder && (
                        <span
                          className="tech-pill font-mono"
                          style={{
                            borderColor: "rgba(6, 182, 212, 0.35)",
                            color: "var(--accent-secondary)",
                          }}
                        >
                          Editable Entry
                        </span>
                      )}
                    </div>
                    <h3 className="h4 fw-bold mb-1">{item.role}</h3>
                  </div>

                  <div className="d-flex flex-column align-items-md-end gap-1 small text-muted-custom">
                    <span className="d-inline-flex align-items-center gap-2">
                      <Calendar size={15} aria-hidden="true" />
                      {item.duration}
                    </span>
                    {item.location && (
                      <span className="d-inline-flex align-items-center gap-2">
                        <MapPin size={15} aria-hidden="true" />
                        {item.location}
                      </span>
                    )}
                    {item.employmentType && (
                      <span className="d-inline-flex align-items-center gap-2">
                        {item.employmentType}
                      </span>
                    )}
                  </div>
                </div>

                <h4 className="h6 text-uppercase font-mono text-muted-custom mb-3">
                  Key Responsibilities
                </h4>
                <ul className="list-unstyled d-grid gap-2 mb-0">
                  {item.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="d-flex align-items-start gap-2 text-muted-custom"
                    >
                      <CheckCircle2
                        size={17}
                        className="flex-shrink-0 mt-1"
                        style={{ color: "var(--accent-secondary)" }}
                        aria-hidden="true"
                      />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {item.projects?.length > 0 && (
                  <div className="mt-4">
                    <h4 className="h6 text-uppercase font-mono text-muted-custom mb-3 d-flex align-items-center gap-2">
                      <FolderOpen size={15} aria-hidden="true" />
                      Projects
                    </h4>
                    <div className="d-grid gap-3">
                      {item.projects.map((project) => (
                        <div
                          key={project.id}
                          className="p-3 rounded-3"
                          style={{
                            background: "var(--bg-subtle)",
                            border: "1px solid var(--border-subtle)",
                          }}
                        >
                          <p className="fw-semibold mb-1">{project.name}</p>
                          <p className="small text-muted-custom mb-2">
                            {project.description}
                          </p>
                          <div className="d-flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span className="tech-pill" key={tech}>
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
