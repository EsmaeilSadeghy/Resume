import React, { useState, useEffect } from "react";
import "../styles/Header.css"; // Import CSS for styles
import Navbar from "./Navbar";

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`h_section ${isSticky ? "sticky" : ""}`}>
      <Navbar />
      <div className="header-text">
        <h1>Esmaeil Sadeghi</h1>
        <p>
          Computer Engineering <br /> Information Technology
        </p>
      </div>
      <img src="h.jpg" alt="Profile" className="profile-img" />
    </header>
  );
}

export default Header;
