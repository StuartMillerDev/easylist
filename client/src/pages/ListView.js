import React, { Component } from "react";
import API from "../utils/API";

class ListView extends Component{
  // Current state of the app
  state={
    list:{}

  };

// Loads a list when this component loads
  componentdidMount(id){
    this.loadList(this.id);
  }

// Loads a list
getList = id => {
  API.getList(id).then(res => this.setState({list: res.data})).catch(err => console.log(err));
};

// Checkbox an item on the list
checkItem = id => {
  API.checkItem(id).then(res => this.ListItem).catch(err => console.log(err));
};

// capture user search input on every keystroke and save it to the state of the app
handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render(){
    return(
      <List key={this.id}/>
    );
  }
}
