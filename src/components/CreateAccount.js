import { React, useState } from "react";
import user from "./images/user.png";
import Button from "./Button";
import { Link } from "react-router-dom";

export function CreateAccount({ name, setName, onSwitch }) {
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
    <div className="create-form-box">
      <form className="common-form create-form" onSubmit={handleSubmit}>
        <div className="create-form-logo">
          <img
            src={user}
            alt="user icon"
            className="common-form-img create-form-img"
          />
        </div>
        <p className="common-form-title create-form-title">Create Account</p>
        <input
          type="text"
          className="input-field"
          placeholder="User Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          className="input-field"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

        <Button onClick={handleSubmit}>Sign Up</Button>
        <div className="form-footer">
          <Link className="form-footer-link" to="/Contact">
            Contact Us
          </Link>
          <button className="login-create-btn" onClick={onSwitch}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
