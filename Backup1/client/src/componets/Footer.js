import React from "react";

function Footer() {
     
  return (
     <footer>
          <span className="title"> &copy; {new Date().getFullYear()} CopyRight : <a href="http://localhost:3000/">Blog Application </a></span>     
     </footer>
  );
}

export default Footer