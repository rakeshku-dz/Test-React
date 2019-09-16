import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import Home from './container/Home'
import About from './container/About'

const Routing =()=>{
  return(
    <Router>
    <Header />
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>          
      </ul>       

      <Route exact path="/" component={Home} />
      <Route path="/About" component={About} />
              
    </div>
    <Footer />
  </Router>
  )
}

export default Routing;