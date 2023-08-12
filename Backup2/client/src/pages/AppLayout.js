import React from "react";

import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';

import Home from './Home';
import AboutUs from './AboutUs';
import LoginSignup from './LoginSignup';
import ContactUs from './ContactUs';

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
               <Route path='/loginsignup' Component={LoginSignup} />
          </Routes>
          <Footer/>
     </Router>
  );
}

export default AppLayout