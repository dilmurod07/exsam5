import React from "react";
import { Link } from "react-router-dom";
import "./all.scss";
const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>THE RICK AND MORTY</h1>
        <nav>
          <Link style={{ textDecoration: "none" }} to="/diracter">
            <h1>diracter</h1>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/location">
            <h1>location</h1>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/episode">
            <h1>episode</h1>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
