import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="social-media-links">
        <p>©{new Date().getFullYear()} Leith Hill Piano Tuning</p>
      </div>
    </footer>
  );
}

export default Footer;
