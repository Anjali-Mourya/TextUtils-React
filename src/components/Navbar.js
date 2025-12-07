import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ mode, toggleMode, title = "TextUtils" }) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  return (
    <nav className={`glass-nav ${mode}`}>
      <div className="nav-container">
        <Link to="/" className="brand">{title}</Link>

        {/* Desktop Links */}
        <ul className="nav-links">
          <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
          <li><Link to="/convert" className={location.pathname === "/convert" ? "active" : ""}>Convert</Link></li>
          <li><Link to="/history" className={location.pathname === "/history" ? "active" : ""}>History</Link></li>
        </ul>

        {/* Desktop Toggle */}
        <label className="toggle-switch">
          <input type="checkbox" checked={mode === "dark"} onChange={toggleMode} />
          <span className="toggle-slider"></span>
        </label>

        {/* Mobile Hamburger */}
        <button
          className={`menu-toggle ${mobileMenu ? "active" : ""}`}
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <span></span><span></span><span></span>
        </button>

        {/* Mobile Menu */}
        {/* Mobile Menu – Fixed Toggle */}
<div className={`mobile-nav ${mobileMenu ? "active" : ""}`}>
  <Link to="/" onClick={() => setMobileMenu(false)}>Home</Link>
  <Link to="/convert" onClick={() => setMobileMenu(false)}>Convert</Link>
  <Link to="/history" onClick={() => setMobileMenu(false)}>History</Link>

  {/* THIS IS THE ONLY PART YOU NEED TO CHANGE */}
  <div style={{
    padding: "20px 30px",
    display: "flex",
    alignItems: "center",
    gap: "15px",
    borderTop: "1px solid rgba(255,255,255,0.1)"
  }}>
    <label className="toggle-switch">
      <input type="checkbox" checked={mode === "dark"} onChange={toggleMode} />
      <span className="toggle-slider"></span>
    </label>
    
  </div>
</div>
      </div>
    </nav>
  );
}