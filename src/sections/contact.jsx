import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  const contactInfo = [
    {
      icon: "📍",
      title: "Location",
      details: [
        "C-1006, Green City, Satav Nagar,",
        "Handewadi Road Hadapsar,",
        "Pune-411028"
      ]
    },
    {
      icon: "📧",
      title: "Email",
      details: [
        "contact@sculptortechpvtltd.com",
        "sculptortechpvtltd@gmail.com"
      ]
    },
    {
      icon: "📞",
      title: "Call",
      details: [
        "+91 8623034275",
        "+91 8668584275"
      ]
    }
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        
        {/* Compact Header */}
        <div className="contact-header">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-description">
            Get in touch to discuss your project
          </p>
        </div>

        <div className="contact-wrapper">
          
          {/* Left - Contact Info Cards */}
          <div className="contact-info">
            {contactInfo.map((item, index) => (
              <div className="info-card" key={index}>
                <div className="info-icon">{item.icon}</div>
                <div className="info-content">
                  <h4 className="info-title">{item.title}</h4>
                  {item.details.map((detail, idx) => (
                    <p className="info-detail" key={idx}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right - Contact Form */}
          <div className="contact-form">
            <h3 className="form-title">Send Message</h3>
            
            <form className="form">
              <div className="form-group">
                <input 
                  type="text" 
                  className="form-input"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input 
                    type="email" 
                    className="form-input"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="form-group">
                  <input 
                    type="tel" 
                    className="form-input"
                    placeholder="Your Phone"
                  />
                </div>
              </div>

              <div className="form-group">
                <input 
                  type="text" 
                  className="form-input"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="form-group">
                <textarea 
                  className="form-textarea"
                  placeholder="Your Message"
                  rows="4"
                  required
                ></textarea>
              </div>

              <button type="submit" className="form-submit">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;