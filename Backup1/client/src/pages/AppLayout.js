import React from "react";

import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';

import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

import LoginSignup from './LoginSignup';

import MyProfile from './MyProfile';
import MyBlogs from './MyBlogs';
import MyBin from './MyBin';
import AllBlogs from './AllBlog';
import NewBlog from './NewBlogs';

import {BrowserRouter as Router} from 'react-router-dom';

import {
     Routes,
     Route,
   } from "react-router-dom";

function AppLayout() {
          
     return (
          <Router>
               <Navbar/>
               <Routes>
                    <Route path='/' Component={Home} />
                    <Route path='/home' Component={Home} />
                    <Route path='/aboutus' Component={AboutUs} />
                    <Route path='/contactus' Component={ContactUs} />
                    <Route path='/myprofile' Component={MyProfile} />
                    <Route path='/allblogs' Component={AllBlogs} />
                    <Route path='/mybin' Component={MyBin} />
                    <Route path='/myblogs' Component={MyBlogs} />
                    <Route path='/newblog' Component={NewBlog} />
                    <Route path='/loginsignup' Component={LoginSignup} />
               </Routes>
               <Footer/>
          </Router>
     );
}

export default AppLayout