import React from 'react'
import './style.css'

import { BrowserRouter } from 'react-router-dom';
/**
* @author
* @function Navbar
**/

const Navbar = (props) => {
  return(
    <BrowserRouter>
      <div className="navbar">
        <ul className="navbarmenu">
          <li><a href="/">Home</a></li>
            <li><a href="/Bollywood">Bollywood</a></li>
            <li><a href="/Fitness">Fitness</a></li>
            <li><a href="/Technology">Technology</a></li>
        </ul>
    </div>
    </BrowserRouter>
    
   )

 }

export default Navbar