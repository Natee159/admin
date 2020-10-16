import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './component/navbar.js';
import Head from './component/head.js';
import Admin from './page/admin.js';
import Insert from './page/insert.js';
import Update from './page/update.js';
import Login from './page/login.js';
import Salesum from './page/salesum.js';
import Promotion from './page/promotion.js';
import Updatepromotion from './page/updatepromotion.js';
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
        <Route path="/salesum">
          <Salesum />
        </Route>
        <Route path="/promotion">
          <Promotion />
        </Route>
        <Route path="/updatepromotion">
          <Updatepromotion />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

