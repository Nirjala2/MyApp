import React from "react";
import "../styles/About.css";

const About = () => {
  const companyInfo = [
    { icon: "🏢", label: "Industry", value: "IT Services and Consulting" },
    { icon: "👥", label: "Size", value: "05-20 employees" },
    { icon: "📍", label: "Location", value: "Pune, Maharashtra" },
    { icon: "🏷️", label: "Type", value: "Private Limited" },
    { icon: "📧", label: "Email", value: "sculptortechpvtltd@gmail.com" },
    { icon: "💼", label: "Freelance", value: "Available" }
  ];

  const specialities = [
    "Web Design & Development",
    "Mobile App Development", 
    "Social Media Marketing",
    "SEO",
    "Web Analytics"
  ];

  // Function to scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="about-section" id="about">
      <div className="container">
        
        {/* Compact Header with icon */}
        <div className="about-header">
          <div className="header-icon">🚀</div>
          <h2 className="about-title">About SculptorTech</h2>
          <p className="about-tagline">
            Helping SMEs achieve revenue goals through technology & business solutions
          </p>
        </div>

        {/* All content in a single compact card */}
        <div className="about-card">
          
          {/* Main description */}
          <div className="about-description">
            <p>
              SculptorTech Pvt Ltd helps Small and Medium Enterprises achieve their Revenue Goals 
              by providing Technology and Business Solutions.
            </p>
          </div>

          {/* Specialities in single line */}
          <div className="specialities-section">
            <div className="specialities-header">
              <span className="section-icon">✨</span>
              <span className="section-title">Our Specialities</span>
            </div>
            <div className="specialities-tags">
              {specialities.map((item, index) => (
                <span key={index} className="speciality-tag">
                  {item}
                  {index < specialities.length - 1 && <span className="tag-separator">•</span>}
                </span>
              ))}
            </div>
          </div>

          {/* Company info grid */}
          <div className="company-grid">
            {companyInfo.map((item, index) => (
              <div key={index} className="company-item">
                <div className="item-icon-circle">{item.icon}</div>
                <div className="item-content">
                  <span className="item-label">{item.label}</span>
                  <span className="item-value">{item.value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA - Scrolls to Contact section */}
          <div className="contact-cta">
            <div className="cta-icon">📩</div>
            <div className="cta-content">
              <span className="cta-text">Ready to transform your business?</span>
              <button 
                onClick={scrollToContact} 
                className="cta-button"
              >
                Get in Touch
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;