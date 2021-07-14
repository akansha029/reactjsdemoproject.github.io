import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import Home from '../Main/Home/index';
import About from '../Main/About/index';
import Contact from '../Main/Contact/index';
import Service from '../Main/Services/index';
import Navbar from '../Component/Navbar/index';
import { Switch, Route, Redirect } from 'react-router-dom';

export default function Main(){
  return (
    <>
      <Navbar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};