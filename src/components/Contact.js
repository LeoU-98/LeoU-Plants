import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import "./MediaQueries.css";
import Button from "./Button";
import ContactBackground from "./images/ContactBackground.png";
import WAppLogo from "./images/WAppLogo.png";
import TwitterLogo from "./images/TwitterLogo.png";
import FacebookLogo from "./images/FacebookLogo.png";
import InstaLogo from "./images/InstaLogo.png";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(name);
    console.log(email);
    console.log(subject);
    console.log(message);

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }

  return (
    <div className="contact">
      <div className="message-box">
        <form
          className="message-form"
          onSubmit={handleSubmit}
          action="/action.php"
        >
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="LeoU"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="text"
            placeholder="LeoU@Example.com"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            placeholder="Plant Care"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />

          <label htmlFor="message" className="txetarea-label">
            Message:
          </label>
          <textarea
            cols="30"
            rows="10"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <Button className="message-form-btn" onClick={handleSubmit}>
            Send
          </Button>
        </form>
      </div>

      <div className="contact-background">
        <img
          className="contact-background-img"
          src={ContactBackground}
          alt=""
        />
      </div>

      <div className="social-icon-box">
        <div className="social-icon">
          <Link to="https://web.whatsapp.com/">
            <img src={WAppLogo} alt="WhatsApp" />
          </Link>
        </div>
        <div className="social-icon">
          <Link to="https://twitter.com/">
            <img src={TwitterLogo} alt="Twitter" />
          </Link>
        </div>
        <div className="social-icon">
          <Link to="https://www.facebook.com/">
            <img src={FacebookLogo} alt="Facebook" />
          </Link>
        </div>
        <div className="social-icon">
          <Link to="https://www.instagram.com/">
            <img src={InstaLogo} alt="Instagram" />
          </Link>
        </div>
      </div>
    </div>
  );
}
