import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navStyle = {
    backgroundColor: "#333", 
    padding: "10px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  };

  const linkStyle = {
    color: "white", 
    textDecoration: "none", 
    fontSize: "18px",
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link to="/about" style={linkStyle}>
        About
      </Link>
      <Link to="/contact" style={linkStyle}>
        Contact
      </Link>
    </nav>
  );
}