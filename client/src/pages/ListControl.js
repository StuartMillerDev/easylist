import React, { Component } from "react";
import API from "../utils/API";


class ListControl extends Component{

  // Current state of the app
  state={
    lists:[]
  }

  // Render
  render(){
    return(
      <Button text="Create List" style={.style}/>
    );
  }
}
