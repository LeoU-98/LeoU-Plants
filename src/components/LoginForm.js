import { React, useState } from "react";
import loginImg from "./images/loginImg.png";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function LoginForm({ name, setName, onSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(password);

    setEmail("");
    setName("");
    setPassword("");
  }

  return (
    <div className="login-form-box">
      <form className="common-form login-form" onSubmit={handleSubmit}>
        <div className="login-form-logo">
          <img
            src={loginImg}
            alt="user icon"
            className="common-form-img login-form-img"
          />
        </div>
        <p className="common-form-title login-form-title">Login</p>
        <input
          type="email"
          className="input-field"
          placeholder="User Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="password"
          className="input-field"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button onClick={handleSubmit}>Log In</Button>
        <div className="form-footer">
          <Link className="form-footer-link" to="/Contact">
            Contact Us
          </Link>
          <button className="login-create-btn" onClick={onSwitch}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
