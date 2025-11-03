import React from "react";
import "../css/BlackTigerBlinkingLoader.css";

export default function BlackTigerBlinkingLogo() {
  return (
    <div className="tiger-logo-container">
      <img src="/public/images/blkt-logo.png" alt="Black Tigers" className="tiger-logo" />
      <div className="blink-layer left-eye"></div>
      <div className="blink-layer right-eye"></div>
    </div>
  );
}
