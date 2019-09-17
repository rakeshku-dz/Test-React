import React from "react";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../container/home/Home'
import About from '../container/about/About'

const Routing =()=>{
  return(
    <Router>
    <Header />  
          
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
      </Switch>   
   
    <Footer />
  </Router>
  )
}

export default Routing;