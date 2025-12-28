import React from "react";
import "../styles/Home.css";

export default function Home() {
  return (
    <section className="home-section" id="home">
      <div className="container home-container">
        
        {/* Left Content */}
        <div className="home-content">
          <div className="home-badge">
            Technology & Business Solutions
          </div>
          
          <h1 className="main-title">
            Technology & Business Solutions That Drive Growth
          </h1>
          
          <p className="description">
            SculptorTech Pvt. Ltd. helps startups and small to mid-sized businesses
            build scalable digital products, automate operations, and achieve
            sustainable growth through modern technology.
          </p>
          
          <div className="home-buttons">
            <a href="#services" className="btn-primary">Our Services</a>
            <a href="#contact" className="btn-outline">Contact Us</a>
          </div>
          
          {/* Quick Stats */}
          <div className="home-stats">
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>
        
        {/* Right Image */}
        <div className="home-image">
          <div className="image-container">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Technology and Business Solutions"
            />
            <div className="image-overlay"></div>
          </div>
        </div>

      </div>
    </section>
  );
}