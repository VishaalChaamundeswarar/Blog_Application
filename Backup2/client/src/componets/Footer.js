import React from "react";
import {Link} from 'react-router-dom';

function Footer() {
     
  return (
     <footer>
          <span className="title"> &copy; {new Date().getFullYear()} CopyRight : <a href="http://localhost:3000/">Blog Application </a></span>     
     </footer>
  );
}

export default Footer