import React,{Component} from "react";

import ListItem from "../listItem/";
import items from "../../items.json";

const style={
  list: {
    margin: 20,
    background: "#2F4858",
    
  }

}
class List extends Component{

state={
items
}
  render(){
    return (
      <div style={style.list} className="container">
        {this.state.items.map(item =>(
          <ListItem key={item.id} text={item.name}/>
        ))}
      </div>
    );

  }



}

export default List;
