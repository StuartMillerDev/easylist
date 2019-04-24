import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ListControl from "./pages/ListControl";
import ListView from "./pages/ListView";
import List from "./components/List";
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route exact path="/" component={ListControl} />
        <Route exact path="/list" component={ListView} />
        <Route exact path="/list/:id" component={List} />
        <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
