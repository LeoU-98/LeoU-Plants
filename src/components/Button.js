import { React } from "react";
import "./Button.css";

export default function Button({ onClick, children }) {
  return (
    <button className="app-button submit-btn send-btn " onClick={onClick}>
      {children}
    </button>
  );
}
