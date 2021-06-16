import React from 'react';
import './style.css';
import Navbar from '../Navbar';
/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className="header">
      <div class="HeaderTop">
        <div className="Siren">
          <div className="Vertical"> The</div><h1 className="Heading">Siren</h1>
        </div>
        <div className="login">
              <a href="/">Login</a>
              <a href="/">Signup</a>
        </div>
      </div>
      <div className="navbar">
      <Navbar />
      </div>
    </header>
   )

 }

export default Header