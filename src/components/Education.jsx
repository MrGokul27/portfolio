import React from "react";
import { GraduationCap, Calendar, Building2 } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { Reveal } from "./Reveal";

export function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="section-padding section-alt">
      <div className="container">
        <Reveal>
          <div className="mb-5">
            <span className="section-eyebrow">
              <GraduationCap size={14} aria-hidden="true" />
              {education.sectionEyebrow}
            </span>
            <h2 className="section-title">{education.sectionTitle}</h2>
            <p className="section-subtitle">{education.sectionSubtitle}</p>
          </div>
        </Reveal>

        <div className="row g-4">
          {education.items.map((item, index) => (
            <div className="col-lg-8" key={item.id}>
              <Reveal delay={index * 90}>
                <article className="surface-card surface-card-interactive p-4 p-md-5">
                  <div className="d-flex flex-column flex-sm-row align-items-start gap-4">
                    <div
                      className="icon-badge-box"
                      style={{ width: "56px", height: "56px" }}
                      aria-hidden="true"
                    >
                      <GraduationCap size={26} />
                    </div>

                    <div className="flex-grow-1">
                      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                        <h3 className="h4 fw-bold mb-0">{item.degree}</h3>
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

                      <div className="d-flex flex-wrap gap-4 text-muted-custom small mb-3">
                        <span className="d-inline-flex align-items-center gap-2">
                          <Building2 size={15} aria-hidden="true" />
                          {item.institution}
                        </span>
                        <span className="d-inline-flex align-items-center gap-2">
                          <Calendar size={15} aria-hidden="true" />
                          {item.graduationYear}
                        </span>
                      </div>

                      {item.details && (
                        <p className="small text-muted-custom mb-0">
                          {item.details}
                        </p>
                      )}
                    </div>
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
