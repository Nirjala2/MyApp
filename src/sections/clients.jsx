import React from "react";
import "../styles/Clients.css";

const Clients = () => {
  const clients = [
    {
      name: "MG CAPITAL MAINTENANCE",
      category: "Finance & Maintenance",
      description: "Capital maintenance and financial services provider"
    },
    {
      name: "Bhadra Breeding Centre",
      category: "Agriculture & Livestock",
      description: "Specialized breeding and livestock management"
    },
    {
      name: "SaptaDhanya",
      category: "Food Products",
      description: "Premium food products and agricultural commodities"
    },
    {
      name: "Dr. B.B. Chavan Military School",
      category: "Education",
      description: "Military school providing disciplined education"
    }
  ];

  return (
    <section className="clients-section" id="clients">
      <div className="container">
        
        {/* Section Header */}
        <div className="clients-header">
          <span className="section-subtitle">Our Clients</span>
          <h2 className="section-title">Trusted By Industry Leaders</h2>
          <p className="section-description">
            We've partnered with diverse businesses to deliver exceptional 
            technology solutions that drive growth and efficiency.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div className="client-card" key={index}>
              <div className="client-logo-placeholder">
                <span className="client-initials">
                  {client.name.split(' ').map(word => word[0]).join('').slice(0, 3)}
                </span>
              </div>
              <div className="client-content">
                <h3 className="client-name">{client.name}</h3>
                <span className="client-category">{client.category}</span>
                <p className="client-description">{client.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats/Trust Indicators (Optional) */}
        <div className="trust-indicators">
          <div className="trust-item">
            <span className="trust-number">10+</span>
            <span className="trust-label">Projects Completed</span>
          </div>
          <div className="trust-item">
            <span className="trust-number">95%</span>
            <span className="trust-label">Client Satisfaction</span>
          </div>
          <div className="trust-item">
            <span className="trust-number">5+</span>
            <span className="trust-label">Industries Served</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Clients;