// import logo from './logo.svg';
import './App.css';
import Splitwise from './Components/Splitwise';
import React from 'react'
import { Expensetracker } from './Components/Expensetracker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Registration from './Components/Registration';
import Login from './Components/Login';
// import { Navbar } from 'react-bootstrap';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
      <Switch>
      <Route path="/register">
        <Registration/>
        </Route>
    
        <Route path="/login">
        <Login/>
        </Route>

      <Route path="/expense">
        <Expensetracker/>
        </Route>
        
      <Route path="/split">
        <Splitwise/>
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
