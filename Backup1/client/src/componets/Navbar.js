/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState,useEffect } from "react";
import {Link,useNavigate} from 'react-router-dom';

const Navbar=()=> {
     const navigate = useNavigate();
     const [authenticated, setauthenticated] = useState(false);
     useEffect(() => {
       const loggedInUser = localStorage.getItem("Authorization");
       if (loggedInUser) {
         setauthenticated(true);
       }else{
          setauthenticated(false);
       }
     }, []);

     const logout = () =>{
          localStorage.removeItem('Authorization');
          localStorage.removeItem('id');
          navigate("/loginsignup");
          window.location.reload();
     }

     if(authenticated) {
          return (
               <nav>
                    <Link className="title" to="/home" >Home</Link>
                    <Link className="title" to="/aboutus" >About Us</Link>
                    <Link className="title" to="/contactus" >Contact Us</Link>
                    <Link className="title" to="/allblogs">All Blogs</Link>
                    <Link className="title" to="/myprofile" >Dashboard</Link>
                    <Link className="title" to="/newblog">New Blog</Link>
                    <Link className="title" to="/myblogs">My Blogs</Link>
                    <Link className="title" to="/mybin">My Bin</Link>
                    <Link className="title" onClick={logout}>Logout</Link>   
               </nav>
          );
     }else{
          return (
          <nav>
               <Link className="title" to="/home" >Home</Link>
               <Link className="title" to="/aboutus" >About Us</Link>
               <Link className="title" to="/contactus" >Contact Us</Link>
               <Link className="title" to="/loginsignup" >Log In/ Sign Up</Link>
          </nav>
          );
     }
}

export default Navbar