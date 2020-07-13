import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header'
import Home from './Home'


function App() {
  return (
    <div className="App">
        <Router>
        <div className="app">
        <Switch>
          <Route path="/checkout"> 
          <Header />
          <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <Header />
            <h1>Login page</h1>
          </Route>
          
          {/* This is a default route */}
          <Route path="/">
            <Header />
            <Home />
            <h1>Home page.</h1>
          </Route>
        </Switch>
        </div>
       </Router>
    </div>
  );
}

export default App;
