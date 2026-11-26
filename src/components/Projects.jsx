import React, { useState } from "react";
import { FolderGit2, ExternalLink, Info } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { Reveal } from "./Reveal";
import { GitHubIcon } from "./TechIcons";

export function Projects() {
  const { projects } = portfolioData;
  const [noticeProjectId, setNoticeProjectId] = useState(null);

  const handlePlaceholderClick = (projectId) => {
    setNoticeProjectId((prev) => (prev === projectId ? null : projectId));
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <Reveal>
          <div
            className="text-center mx-auto mb-5"
            style={{ maxWidth: "680px" }}
          >
            <span className="section-eyebrow">
              <FolderGit2 size={14} aria-hidden="true" />
              {projects.sectionEyebrow}
            </span>
            <h2 className="section-title">{projects.sectionTitle}</h2>
            <p className="section-subtitle mx-auto">
              {projects.sectionSubtitle}
            </p>
          </div>
        </Reveal>

        <div className="row g-4">
          {projects.items.map((project, index) => {
            const hasLiveUrl = Boolean(
              project.liveUrl && project.liveUrl.trim() !== "",
            );
            const hasGithubUrl = Boolean(
              project.githubUrl && project.githubUrl.trim() !== "",
            );
            const showNotice = noticeProjectId === project.id;

            return (
              <div className="col-md-6 col-lg-4" key={project.id}>
                <Reveal delay={index * 100} className="h-100">
                  <article className="surface-card surface-card-interactive project-card h-100">
                    <div className="project-thumb-wrap">
                      <img
                        src={project.thumbnail}
                        alt={project.thumbnailAlt}
                        className="project-thumb-img"
                        loading="lazy"
                      />
                      {project.statusLabel && (
                        <span className="project-placeholder-pill">
                          {project.statusLabel}
                        </span>
                      )}
                    </div>

                    <div className="p-4 d-flex flex-column flex-grow-1">
                      <h3 className="h5 fw-bold mb-2">{project.name}</h3>
                      <p className="small text-muted-custom mb-3 flex-grow-1">
                        {project.description}
                      </p>

                      <div className="d-flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span className="tech-pill" key={tech}>
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="d-flex gap-2 mt-auto">
                        {hasLiveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-gradient btn-sm flex-fill py-2"
                          >
                            <ExternalLink size={15} aria-hidden="true" />
                            <span>Live Demo</span>
                          </a>
                        ) : (
                          <button
                            type="button"
                            className="btn-gradient btn-sm flex-fill py-2"
                            onClick={() => handlePlaceholderClick(project.id)}
                            aria-expanded={showNotice}
                          >
                            <ExternalLink size={15} aria-hidden="true" />
                            <span>Live Demo</span>
                          </button>
                        )}

                        {hasGithubUrl ? (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline-surface btn-sm flex-fill py-2"
                          >
                            <GitHubIcon size={15} />
                            <span>GitHub</span>
                          </a>
                        ) : (
                          <button
                            type="button"
                            className="btn-outline-surface btn-sm flex-fill py-2"
                            onClick={() => handlePlaceholderClick(project.id)}
                            aria-expanded={showNotice}
                          >
                            <GitHubIcon size={15} />
                            <span>GitHub</span>
                          </button>
                        )}
                      </div>

                      {showNotice && (
                        <div
                          className="mt-3 p-2 px-3 rounded-3 small d-flex align-items-start gap-2"
                          role="status"
                          style={{
                            backgroundColor: "var(--bg-subtle)",
                            border: "1px solid var(--border-subtle)",
                            color: "var(--text-muted)",
                          }}
                        >
                          <Info
                            size={15}
                            className="flex-shrink-0 mt-1"
                            style={{ color: "var(--accent-secondary)" }}
                            aria-hidden="true"
                          />
                          <span>
                            Placeholder link: add <code>liveUrl</code> and{" "}
                            <code>githubUrl</code> in{" "}
                            <code>src/data/portfolioData.js</code>.
                          </span>
                        </div>
                      )}
                    </div>
                  </article>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
