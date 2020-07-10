import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from "react-router-dom";
import AddUser from "./views/AddUser";
import Users from "./views/Users";

class App extends Component{
  render(){
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <ul>
              <li><Link to="/" >Home</Link></li>
              <li><Link to="/addUser">Upload</Link></li>
            </ul>
          </header>
          <div>
            <Switch>
              <Route path="/" exact>
                <Users/>
              </Route>
              <Route path="/addUser">
                <AddUser/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
