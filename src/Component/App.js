import React, { Component } from 'react';
import './global/css/App.css';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import CheckCollection from "./CheckCollection";
import NewCollection from "./NewCollection";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={CheckCollection} />
            <Route path="/nueva/:codigo?" render={props => <NewCollection {...props} />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
