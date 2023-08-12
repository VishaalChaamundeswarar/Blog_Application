import React from "react";
import {Link} from 'react-router-dom';

function Navbar() {
     
  return (
     <nav>
          <Link className="title" to="/home" >Home</Link>
          <Link className="title" to="/aboutus" >About Us</Link>
          <Link className="title" to="/contactus" >Contact Us</Link>
          <Link className="title" to="/loginsignup" >Log In / Sign Up</Link>
     </nav>
  );
}

export default Navbar