import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './component/navbar.js';
import Head from './component/head.js';
import Admin from './page/admin.js';
import Insert from './page/insert.js';
import Update from './page/update.js';
import Login from './page/login.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Head />
      <NavBar />
      <Switch>
      <Route exact path="/">
          <Login />
        </Route>
        <Route path="/insert">
          <Insert />
        </Route>
        <Route path="/update">
          <Update />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

