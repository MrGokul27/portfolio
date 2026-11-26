import React, { useState } from "react";
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { Reveal } from "./Reveal";
import { GitHubIcon, LinkedInIcon } from "./TechIcons";

const INITIAL_FORM = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm(values) {
  const errors = {};
  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = "Please enter your name (at least 2 characters).";
  }
  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.subject.trim() || values.subject.trim().length < 3) {
    errors.subject = "Please enter a subject (at least 3 characters).";
  }
  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = "Please write a message of at least 10 characters.";
  }
  return errors;
}

export function Contact() {
  const { contact, socialLinks } = portfolioData;
  const [formValues, setFormValues] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitState, setSubmitState] = useState({
    status: "idle",
    message: "",
  });
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
    if (submitState.status !== "idle") {
      setSubmitState({ status: "idle", message: "" });
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Clipboard API unavailable in restricted contexts
    }
  };

  const buildMailtoHref = () => {
    const subject = encodeURIComponent(
      formValues.subject.trim() || "Portfolio Inquiry",
    );
    const body = encodeURIComponent(
      `Name: ${formValues.name.trim()}\nEmail: ${formValues.email.trim()}\n\n${formValues.message.trim()}`,
    );
    return `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateForm(formValues);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitState({
        status: "error",
        message: "Please fix the highlighted fields before submitting.",
      });
      return;
    }

    const endpoint = contact.formEndpoint ? contact.formEndpoint.trim() : "";
    if (!endpoint) {
      setSubmitState({
        status: "unconfigured",
        message:
          "Form validated! No email backend endpoint is configured yet in src/data/portfolioData.js (contact.formEndpoint). Use the button below to open your email client instead.",
      });
      return;
    }

    setSubmitState({ status: "submitting", message: "" });

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formValues.name.trim(),
          email: formValues.email.trim(),
          subject: formValues.subject.trim(),
          message: formValues.message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setFormValues(INITIAL_FORM);
      setErrors({});
      setSubmitState({
        status: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
    } catch (error) {
      setSubmitState({
        status: "error",
        message:
          "Unable to send message right now. Please verify your email service endpoint or use the direct email link.",
      });
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <Reveal>
          <div
            className="text-center mx-auto mb-5"
            style={{ maxWidth: "680px" }}
          >
            <span className="section-eyebrow">
              <Mail size={14} aria-hidden="true" />
              {contact.sectionEyebrow}
            </span>
            <h2 className="section-title">{contact.sectionTitle}</h2>
            <p className="section-subtitle mx-auto">
              {contact.sectionSubtitle}
            </p>
          </div>
        </Reveal>

        <div className="row g-4 align-items-stretch">
          {/* Left Column: Direct Contact Channels */}
          <div className="col-lg-5">
            <Reveal className="h-100">
              <div className="surface-card p-4 p-md-5 h-100 d-flex flex-column justify-content-between">
                <div>
                  <h3 className="h4 fw-bold mb-2">Contact Information</h3>
                  <p className="small text-muted-custom mb-4">
                    Open to Frontend Developer roles, internships, and
                    collaborative web projects. Update these placeholders in{" "}
                    <code>src/data/portfolioData.js</code>.
                  </p>

                  <div className="d-grid gap-3 mb-4">
                    <div
                      className="p-3 rounded-4 d-flex align-items-center justify-content-between gap-2"
                      style={{
                        backgroundColor: "var(--bg-subtle)",
                        border: "1px solid var(--border-subtle)",
                      }}
                    >
                      <div className="d-flex align-items-center gap-3 overflow-hidden">
                        <div className="icon-badge-box" aria-hidden="true">
                          <Mail size={20} />
                        </div>
                        <div className="overflow-hidden">
                          <div className="small text-muted-custom">Email</div>
                          <a
                            href={`mailto:${contact.email}`}
                            className="fw-semibold text-decoration-none text-truncate d-block"
                            style={{ color: "var(--text-main)" }}
                          >
                            {contact.email}
                          </a>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="theme-toggle-btn flex-shrink-0"
                        onClick={handleCopyEmail}
                        aria-label="Copy email address"
                        title="Copy email address"
                      >
                        {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    </div>

                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-4 d-flex align-items-center justify-content-between text-decoration-none"
                      style={{
                        backgroundColor: "var(--bg-subtle)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-main)",
                      }}
                    >
                      <div className="d-flex align-items-center gap-3">
                        <div className="icon-badge-box" aria-hidden="true">
                          <LinkedInIcon size={20} />
                        </div>
                        <div>
                          <div className="small text-muted-custom">
                            LinkedIn
                          </div>
                          <div className="fw-semibold">Connect on LinkedIn</div>
                        </div>
                      </div>
                      <ExternalLink
                        size={16}
                        className="text-muted-custom"
                        aria-hidden="true"
                      />
                    </a>

                    <a
                      href={socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-4 d-flex align-items-center justify-content-between text-decoration-none"
                      style={{
                        backgroundColor: "var(--bg-subtle)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-main)",
                      }}
                    >
                      <div className="d-flex align-items-center gap-3">
                        <div className="icon-badge-box" aria-hidden="true">
                          <GitHubIcon size={20} />
                        </div>
                        <div>
                          <div className="small text-muted-custom">GitHub</div>
                          <div className="fw-semibold">View Repositories</div>
                        </div>
                      </div>
                      <ExternalLink
                        size={16}
                        className="text-muted-custom"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2 small text-muted-custom pt-3 border-top border-secondary-subtle">
                  <MapPin
                    size={16}
                    style={{ color: "var(--accent-secondary)" }}
                    aria-hidden="true"
                  />
                  <span>{contact.location}</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="col-lg-7">
            <Reveal delay={100} className="h-100">
              <div className="surface-card p-4 p-md-5 h-100">
                <h3 className="h4 fw-bold mb-4">Send a Message</h3>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <label
                        htmlFor="contact-name"
                        className="form-label small fw-semibold"
                      >
                        Name <span className="text-danger">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        className={`form-control form-control-custom ${
                          errors.name ? "is-invalid" : ""
                        }`}
                        placeholder="Jane Doe"
                        value={formValues.name}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={
                          errors.name ? "contact-name-error" : undefined
                        }
                        required
                      />
                      {errors.name && (
                        <div
                          id="contact-name-error"
                          className="invalid-feedback d-block"
                        >
                          {errors.name}
                        </div>
                      )}
                    </div>

                    <div className="col-sm-6">
                      <label
                        htmlFor="contact-email"
                        className="form-label small fw-semibold"
                      >
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        className={`form-control form-control-custom ${
                          errors.email ? "is-invalid" : ""
                        }`}
                        placeholder="jane@company.com"
                        value={formValues.email}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={
                          errors.email ? "contact-email-error" : undefined
                        }
                        required
                      />
                      {errors.email && (
                        <div
                          id="contact-email-error"
                          className="invalid-feedback d-block"
                        >
                          {errors.email}
                        </div>
                      )}
                    </div>

                    <div className="col-12">
                      <label
                        htmlFor="contact-subject"
                        className="form-label small fw-semibold"
                      >
                        Subject <span className="text-danger">*</span>
                      </label>
                      <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        className={`form-control form-control-custom ${
                          errors.subject ? "is-invalid" : ""
                        }`}
                        placeholder="Frontend Developer Opportunity"
                        value={formValues.subject}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.subject)}
                        aria-describedby={
                          errors.subject ? "contact-subject-error" : undefined
                        }
                        required
                      />
                      {errors.subject && (
                        <div
                          id="contact-subject-error"
                          className="invalid-feedback d-block"
                        >
                          {errors.subject}
                        </div>
                      )}
                    </div>

                    <div className="col-12">
                      <label
                        htmlFor="contact-message"
                        className="form-label small fw-semibold"
                      >
                        Message <span className="text-danger">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        className={`form-control form-control-custom ${
                          errors.message ? "is-invalid" : ""
                        }`}
                        placeholder="Tell me about the role or project..."
                        value={formValues.message}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={
                          errors.message ? "contact-message-error" : undefined
                        }
                        required
                      />
                      {errors.message && (
                        <div
                          id="contact-message-error"
                          className="invalid-feedback d-block"
                        >
                          {errors.message}
                        </div>
                      )}
                    </div>

                    {submitState.status !== "idle" && submitState.message && (
                      <div className="col-12">
                        <div
                          role="alert"
                          className="p-3 rounded-3 small d-flex flex-column gap-2"
                          style={{
                            backgroundColor:
                              submitState.status === "success"
                                ? "rgba(16, 185, 129, 0.12)"
                                : submitState.status === "unconfigured"
                                  ? "rgba(6, 182, 212, 0.12)"
                                  : "rgba(239, 68, 68, 0.12)",
                            border: `1px solid ${
                              submitState.status === "success"
                                ? "rgba(16, 185, 129, 0.35)"
                                : submitState.status === "unconfigured"
                                  ? "rgba(6, 182, 212, 0.35)"
                                  : "rgba(239, 68, 68, 0.35)"
                            }`,
                          }}
                        >
                          <div className="d-flex align-items-start gap-2">
                            {submitState.status === "success" ? (
                              <CheckCircle2
                                size={18}
                                className="text-success flex-shrink-0 mt-1"
                              />
                            ) : (
                              <AlertCircle
                                size={18}
                                className={
                                  submitState.status === "unconfigured"
                                    ? "text-info flex-shrink-0 mt-1"
                                    : "text-danger flex-shrink-0 mt-1"
                                }
                              />
                            )}
                            <span>{submitState.message}</span>
                          </div>

                          {submitState.status === "unconfigured" && (
                            <div>
                              <a
                                href={buildMailtoHref()}
                                className="btn-outline-surface btn-sm py-2"
                              >
                                <Mail size={15} aria-hidden="true" />
                                <span>Send via Email Client</span>
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="col-12 pt-2">
                      <button
                        type="submit"
                        className="btn-gradient w-100 w-sm-auto"
                        disabled={submitState.status === "submitting"}
                      >
                        {submitState.status === "submitting" ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm"
                              role="status"
                              aria-hidden="true"
                            />
                            <span>Sending Message...</span>
                          </>
                        ) : (
                          <>
                            <Send size={17} aria-hidden="true" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
