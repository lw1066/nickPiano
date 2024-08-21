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
              fontFamily: "Red Hat Display, sans-serif",
              fontWeight: "700",
            }}
          >
            Leith Hill Pianos
          </h1>
          <h2
            style={{
              fontFamily: "Red Hat Display, sans-serif",
              fontWeight: "400",
            }}
          >
            Tuning and Repairs
          </h2>
        </div>
      </div>
      {/* <div className="navbar-container"> */}
      <ul className="menu">
        <li>
          <Link href="/">
            <span className={pathname === "/" ? "active" : ""}>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/Services">
            <span className={pathname === "/Services" ? "active" : ""}>
              Services
            </span>
          </Link>
        </li>
        <li>
          <Link href="/Contact">
            <span className={pathname === "/Contact" ? "active" : ""}>
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
