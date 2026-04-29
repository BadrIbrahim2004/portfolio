import React, { useState, useRef, useEffect } from "react";
import { portfolioData } from "../data/portfolioData";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import Card from "../components/Card";
import { isElementInViewport } from "../utils/scrollUtils";
import "../assets/sections.css";

const Contact = () => {
  const { contact, personal } = portfolioData;
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isElementInViewport(sectionRef.current)) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setLoading(false);

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="contact section section-alternate"
      ref={sectionRef}
    >
      <div className="container-max">
        <SectionTitle
          title={contact.title}
          subtitle={contact.description}
          center
        />

        <div className="row justify-content-center">
          <div className="col-lg-6">
            <Card hover variant="glass" className="contact-card">
              {/* Success Message */}
              {submitted && (
                <div className={`success-message ${submitted ? "show" : ""}`}>
                  <div className="success-icon">
                    <i className="bi bi-check-circle-fill"></i>
                  </div>
                  <h4>Thank you!</h4>
                  <p>
                    Your message has been sent successfully. I'll get back to
                    you soon!
                  </p>
                </div>
              )}

              {/* Form */}
              {!submitted && (
                <form onSubmit={handleSubmit} className="contact-form">
                  {/* Name Field */}
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Your Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={contact.formPlaceholders.name}
                      className={`form-control ${errors.name ? "error" : ""}`}
                      disabled={loading}
                    />
                    {errors.name && (
                      <span className="error-message">{errors.name}</span>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Your Email <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={contact.formPlaceholders.email}
                      className={`form-control ${errors.email ? "error" : ""}`}
                      disabled={loading}
                    />
                    {errors.email && (
                      <span className="error-message">{errors.email}</span>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Your Message <span className="required">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={contact.formPlaceholders.message}
                      className={`form-control ${errors.message ? "error" : ""}`}
                      disabled={loading}
                    ></textarea>
                    {errors.message && (
                      <span className="error-message">{errors.message}</span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={loading}
                    className="w-100"
                  >
                    {loading ? (
                      <>
                        <span className="spinner-icon">⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <i className="bi bi-send-fill"></i>
                      </>
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>

        {/* Social Links */}
        <div className={`contact-social ${isVisible ? "fade-in-up" : ""}`}>
          <p className="social-title">Or connect with me on social media</p>
          <div className="contact-social-links">
            {personal.social.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="contact-social-link"
                aria-label={link.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`bi ${link.icon}`}></i>
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
