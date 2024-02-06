import { React, useState } from "react";
import "./Login.css";
import { CreateAccount } from "./CreateAccount";
import LoginForm from "./LoginForm";

export default function Login() {
  const [name, setName] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  function handleSwitch() {
    setIsLogin((isLogin) => !isLogin);
  }

  return (
    <div className="login-page">
      {isLogin ? <WelcomeBack name={name} /> : <Welcome name={name} />}

      {isLogin ? (
        <LoginForm name={name} setName={setName} onSwitch={handleSwitch} />
      ) : (
        <CreateAccount name={name} setName={setName} onSwitch={handleSwitch} />
      )}
    </div>
  );
}

function Welcome({ name }) {
  return (
    <div className="login-page-text">
      <h1 className="login-page-heading">
        🌿 Dear Plant Enthusiast, {name.split(" ")[0]}😊
      </h1>
      <p className="login-page-message">
        Hello into a world where nature meets nurture, and where every leaf
        tells a story. Welcome to LeoU's, your premier destination for all
        things green and beautiful! We're thrilled to have you join our
        community of plant lovers and embark on a journey to create your own
        botanical haven
      </p>
    </div>
  );
}

function WelcomeBack({ name }) {
  return (
    <div className="login-page-text">
      <h1 className="login-page-heading">
        ☘️ Welcome Back, {name.split(" ")[0]} 🥳
      </h1>
      <p className="login-page-message">
        🏵️ Thank you for choosing LeoU's as your botanical destination once
        again. Your return marks the growth of our shared plant-loving
        community, and we can't wait to embark on this green adventure with you.
      </p>
    </div>
  );
}
