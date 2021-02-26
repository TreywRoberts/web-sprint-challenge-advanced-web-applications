import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from './components/BubblePage'
import PrivateRoute from './components/PrivateRoute'
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
              <li><Link to ='/'>Login</Link></li>
              <li><Link to ='/protected'>Bubble Page</Link></li>
          </ul>
        </nav>
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path='/protected' component={BubblePage}></PrivateRoute>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute