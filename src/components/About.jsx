import React from "react";
import { Layers, Cpu, Compass, Code2, Sparkles } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { Reveal } from "./Reveal";

const PILLAR_ICONS = {
  Layers,
  Cpu,
  Compass,
  Code2,
};

export function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="section-padding section-alt">
      <div className="container">
        <div className="row g-5 align-items-center">
          {/* Left Column: Introduction & Philosophy */}
          <div className="col-lg-5">
            <Reveal>
              <span className="section-eyebrow">
                <Sparkles size={14} aria-hidden="true" />
                {about.sectionEyebrow}
              </span>
              <h2 className="section-title">{about.sectionTitle}</h2>
              <p className="text-muted-custom fs-6 mb-4">{about.intro}</p>
              <p className="text-muted-custom mb-4">{about.summary}</p>

              <div className="surface-card p-4">
                <div className="d-flex align-items-start gap-3">
                  <div className="icon-badge-box" aria-hidden="true">
                    <Code2 size={22} />
                  </div>
                  <div>
                    <h3 className="h6 fw-bold mb-1">UI Engineering Focus</h3>
                    <p className="small text-muted-custom mb-0">
                      Translating design systems into modular React components
                      with responsive Bootstrap grids, clean CSS3 styling, and
                      cross-device consistency.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: 4 Core Pillars */}
          <div className="col-lg-7">
            <div className="row g-4">
              {about.pillars.map((pillar, index) => {
                const IconComponent = PILLAR_ICONS[pillar.icon] || Code2;
                return (
                  <div className="col-sm-6" key={pillar.id}>
                    <Reveal delay={index * 90} className="h-100">
                      <article className="surface-card surface-card-interactive p-4 h-100">
                        <div className="icon-badge-box mb-3" aria-hidden="true">
                          <IconComponent size={22} />
                        </div>
                        <h3 className="h5 fw-bold mb-2">{pillar.title}</h3>
                        <p className="small text-muted-custom mb-0">
                          {pillar.description}
                        </p>
                      </article>
                    </Reveal>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
