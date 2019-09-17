import React from 'react';
import logo from '../../logo.svg';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />  
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/About">About</NavLink></li>  
        </ul>      
    </header>
    


     
  );
}

export default Header;