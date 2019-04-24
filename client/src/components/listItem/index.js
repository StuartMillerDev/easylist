import React,{Component} from "react";
const style={
  listItem: {
    margin:5,
    padding: 2,
    background:"#33CCFF",
    color:'white'

  }
}

class ListItem extends Component{
constructor(){
  super();
  this.state={checked:false};
  this.handleChange=this.handleChange.bind(this);
}

  state={
    isChecked:false
  };

handleChange(){
  this.setState({isChecked:!this.state.isChecked})
};

  render(){
    return(
    <div className="ListItem" style={style.listItem}>
      <div className="form-check">
        <form>
        <input checked={this.state.isChecked} onChange={this.handleChange} className="form-check-input" type="checkbox"></input>
        </form>
      </div>
      <p style={{textAlign:"center"}}>{this.text}</p>
    </div>
  )
  }
}

export default ListItem;
