import React from "react";
import { Link } from "react-router-dom";   

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MARKED!</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/teacher">Teacher Dashboard</Link>
        <Link to="/student">Student Dashboard</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;