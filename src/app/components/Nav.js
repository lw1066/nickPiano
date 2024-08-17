import React from "react";
import "./Navbar.css"; // We'll create this file for styles
import Link from "next/link";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* <img src="/piano-tuning.jpg" alt="Logo" className="navbar-logo" />{" "} */}
        <h1 style={{ fontSize: "50px", fontFamily: "serif" }}>
          Harris&apos; Helpful Hands
        </h1>
        <ul className="navbar-menu">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
