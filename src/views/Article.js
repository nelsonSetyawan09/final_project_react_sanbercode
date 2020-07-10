import React from "react";
import {
  // BrowserRouter as Router,
  Link,
  Switch,
  Route, 
  useRouteMatch
} from "react-router-dom";
import Topic from "./Topic"

export default function Article(){
  let useMatch = useRouteMatch()
    return (
      <div className="App">
      <header className="App-header">
        <div>Article</div>
      </header>
      <div className="App-header">
        <ul>
          <li><Link to={`${useMatch.url}/article1`}>Article 1</Link></li>
          <li><Link to={`${useMatch.url}/article2`}>Article 2</Link></li>
          <li><Link to={`${useMatch.url}/article3`}>Article 3</Link></li>
        </ul>
      </div>
      <div className="App-header">
        <Switch>
          <Route path={useMatch.url} exact>
            <h3>Silakan Pilih Articlenya!!</h3>
          </Route>
          <Route path={`${useMatch.url}/:articleID`}>
            <Topic/>
          </Route>
        </Switch>
      </div>
    </div> 
    )
}