import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  };

  return (
    <div className="contact-page">

      <div className="contact-banner">
        <span>WE'D LOVE TO HEAR FROM YOU</span>
        <h1>Contact Us</h1>
        <p>Have a question? We're here to help you.</p>
      </div>

      <div className="contact-container">

        <div className="contact-info">
          <span>GET IN TOUCH</span>
          <h2>Let's Talk About Flowers</h2>
          <p>
            Whether you have a question about our flowers,
            orders or services, feel free to contact us.
          </p>

          <div className="contact-detail">
            <span>✉</span>
            <div>
              <h3>Email</h3>
              <p>mansiraut184@gmail.com</p>
            </div>
          </div>

          <div className="contact-detail">
            <span>☎</span>
            <div>
              <h3>Phone</h3>
              <p>+91 8421872268</p>
            </div>
          </div>

          <div className="contact-detail">
            <span>⌖</span>
            <div>
              <h3>Location</h3>
              <p>Pune, Maharashtra, India</p>
            </div>
          </div>
        </div>

        <div className="contact-form-container">

          {submitted ? (
            <div className="contact-success">
              <span>🌸</span>
              <h2>Thank You!</h2>
              <p>Your message has been submitted successfully.</p>
              <button onClick={() => setSubmitted(false)}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Send Us a Message</h2>

              <label>Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                required
              />

              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                required
              />

              <label>Subject</label>
              <input
                type="text"
                placeholder="Enter subject"
                required
              />

              <label>Your Message</label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                required
              />

              <button type="submit">Send Message</button>
            </form>
          )}

        </div>

      </div>
    </div>
  );
}

export default Contact;