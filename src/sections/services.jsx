import React from "react";
import "../styles/Services.css";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Website Design",
      description: "Designing unique and visually appealing websites tailored to your brand identity and business goals.",
      icon: "🎨",
      features: ["Responsive", "Brand Identity", "UI/UX"]
    },
    {
      id: 2,
      title: "Web App Development",
      description: "Building robust web applications using modern technologies and frameworks.",
      icon: "💻",
      features: ["Modern Tech", "Scalable", "High-Performance"]
    },
    {
      id: 3,
      title: "Mobile App Development",
      description: "Developing native and cross-platform mobile applications for iOS and Android.",
      icon: "📱",
      features: ["iOS & Android", "Cross-Platform", "Custom"]
    },
    {
      id: 4,
      title: "Software Testing",
      description: "Comprehensive testing solutions ensuring software quality and reliability.",
      icon: "✅",
      features: ["QA", "Automated", "Performance"]
    },
    {
      id: 5,
      title: "Business Analytics",
      description: "Data-driven solutions and analytics tools for valuable business insights.",
      icon: "📊",
      features: ["Data Viz", "BI", "Insights"]
    },
    {
      id: 6,
      title: "Digital Marketing",
      description: "Strategic digital marketing to enhance online presence and drive growth.",
      icon: "🚀",
      features: ["SEO", "Social Media", "Strategy"]
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="container services-container">
        {/* Section Header */}
        <div className="services-header">
          <span className="section-subtitle">Our Services</span>
          <h2 className="section-title">
            Technology & Business Solutions
          </h2>
          <p className="section-description">
            SculptorTech Pvt Ltd helps SMEs achieve their revenue goals through comprehensive technology solutions.
          </p>
        </div>

        {/* Services Grid - Compact Cards */}
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <div className="service-features">
                {service.features.map((feature, index) => (
                  <span className="service-feature" key={index}>
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;