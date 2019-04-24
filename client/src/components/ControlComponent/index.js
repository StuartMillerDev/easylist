import React from "react";
import Button from "./ButtonComponent";

const styles = {
  card: {
  margin: 20,
  background: "#e8eaf6"
},
heading: {
  background: "#9a74db",
  minHeight: 50,
  lineHeight: 3.5,
  fontSize: "1.2rem",
  color: "white",
  padding: "0 20px"
}
};

function ControlComponent(props){
  return (
    <div className="container">
      <Button text="Templates" style={styles.ButtonDiv} />
      <Button text="Add Custom Item" style={styles.ButtonDiv}/>
      <Button text="Need Help?" style={styles.ButtonDiv}/>
      <Button text="Log Out" style={styles.ButtonDiv}/>
      <Button text="Account" style={styles.ButtonDiv}/>
    </div>
  );
}

module.exports=ControlComponent;
