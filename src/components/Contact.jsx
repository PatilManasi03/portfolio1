import React, { useState } from 'react';
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  // State for suggestion box, name, and email
  const [suggestion, setSuggestion] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleInputChange = (e) => {
    setSuggestion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if name and email are provided
    if (!name || !email) {
      alert('Please provide your name and email address.');
      return;
    }

    // Send the suggestion via mailto link (to your email)
    const subject = "Suggestion from website";
    const body = encodeURIComponent(`Suggestion: ${suggestion}\n\nFrom: ${name}\nEmail: ${email}`);
    const mailtoLink = `mailto:manasipatil0304@gmail.com?subject=${subject}&body=${body}`;

    // Open the default email client with prefilled email content
    window.location.href = mailtoLink;
  };

  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.google.com" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https://www.google.com" target="_blank" className="items">
            <CiFacebook className="icons" />
          </a>
          <a href="https://www.google.com" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://www.google.com" target="_blank" className="items">
            <FaSquareXTwitter className="icons" />
          </a>
          <a href="https://www.github.com" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a href="mailto:webdevmastery@gmail.com" target="_blank" className="items">
            <SiGmail className="icons" />
          </a>
        </div>

        {/* Suggestion Box Section */}
        <div className="suggestion-box">
          <h2>We value your feedback!</h2>
          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={handleNameChange}
              className="suggestion-input"
              required
            />
            {/* Email Input */}
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={handleEmailChange}
              className="suggestion-input"
              required
            />
            {/* Suggestion Input */}
            <textarea
              placeholder="Share your suggestions or feedback"
              value={suggestion}
              onChange={handleInputChange}
              rows="5"
              className="suggestion-input"
              required
            />
            <button type="submit" className="btn-submit">Submit Suggestion</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact;
