import React from "react";
// Use styles to set div shape, square...circle ect.

function Button(props){
  return(
    <div className="ButtonDiv">
      <button onClick={props.handleFormSubmit} className="btn btn-primary" style={props.style}>
      {props.text}
      </button>
    </div>
  );
}


export default Button;
