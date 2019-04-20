import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import List from "./components/List/index.js";
import './App.css';


class App extends Component {
  render() {
    return (
      <List/>
    );
  }
}

export default App;
