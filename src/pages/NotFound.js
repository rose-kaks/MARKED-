import React from 'react';
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Error 404</h2>
      <p>Sorry, this page cannot be found!</p>
      <Link to="/">Click to return to Home</Link>
    </div>
  );
}
 
export default NotFound;