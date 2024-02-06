import React from "react";
import "./PageNotFound.css";
import NotFound from "./images/NotFound.png";

export default function PageNotFound() {
  return (
    <div className="page-not-found">
      <div>
        <img src={NotFound} alt="" className="not-found-img" />
      </div>
      <p className="not-found-message">404 - Page Not Found</p>
    </div>
  );
}
