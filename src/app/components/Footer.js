import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="social-media-links">
        <div style={{ width: "15px", marginBottom: "4px" }}>
          <FontAwesomeIcon icon={faCopyright} style={{ color: "black" }} />
        </div>
        <p>2024 Leith Hill Piano Tuning</p>
      </div>
    </footer>
  );
}

export default Footer;
