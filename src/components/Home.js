import { React } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import HomeBackground from "./images/HomeBackground.png";

export default function Home() {
  return (
    <div className="home-content">
      <div className="home-text">
        <h1 className="home-title">Blossom & Bloom</h1>
        <p className="home-message">
          Whether you're welcoming new employees, rewarding your team for their
          hard work, or showing appreciation to your valued clients, make a
          statement with unique, fully-grown potted plants shipped directly from
          our greenhouse.
        </p>
        <Link to="/Login" className="home-btn">
          Get Started
        </Link>
      </div>
      <div className="home-image-box">
        <img className="home-img" src={HomeBackground} alt="Plant Care" />
      </div>
    </div>
  );
}
