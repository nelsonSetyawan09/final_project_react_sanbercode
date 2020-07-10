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
import EditUser from "./views/EditUser";
import ViewUser from "./views/ViewUser"

class App extends Component{
  componentDidMount(){
    
  }
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
              <Route path="/viewUser/:id">
                <ViewUser/>
              </Route>
              <Route path="/editUser/:id">
                <EditUser/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
