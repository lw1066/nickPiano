"use client";

import React from "react";
import "./Navbar.css"; // We'll create this file for styles
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import useRouter

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="logo-text">
        <img src="/logo.svg" alt="Logo" className="logo" />
        <div className="logoText">
          <h1
            style={{
              fontFamily: "Dancing Script, sans-serif",
              fontWeight: "500",
              color: "black",
            }}
          >
            Leith Hill Piano Tuning
          </h1>
          <h2
            style={{
              fontFamily: "Dancing Script, sans-serif",
              fontWeight: "400",
              color: "black",

              textAlign: "center",
            }}
          >
            Keeping Surrey In Tune{" "}
          </h2>
        </div>
      </div>
      {/* <div className="navbar-container"> */}
      <ul className="menu">
        <li>
          <Link href="/">
            <span
              className={` ${"navLinks"} ${pathname === "/" ? "active" : ""}`}
            >
              Home
            </span>
          </Link>
        </li>
        <li>
          <Link href="/Services">
            <span
              className={` ${"navLinks"} ${
                pathname === "/Services" ? "active" : ""
              }`}
            >
              Services
            </span>
          </Link>
        </li>
        <li>
          <Link href="/Contact">
            <span
              className={` ${"navLinks"} ${
                pathname === "/Contact" ? "active" : ""
              }`}
            >
              Contact
            </span>
          </Link>
        </li>
      </ul>
      {/* </div> */}
    </nav>
  );
}

export default Navbar;
