"use client";

import React from "react";
import "./Navbar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
              fontWeight: "600",
              color: "black",
            }}
          >
            Leith&nbsp;Hill Piano&nbsp;Tuning
          </h1>
        </div>
      </div>

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
