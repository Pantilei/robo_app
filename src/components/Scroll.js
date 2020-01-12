import React from "react";

const Scroll = props => {
  return (
    <div style={{ overflowY: "scroll", height: "600px", border: "5px solid" }}>
      {props.children}
    </div>
  );
};

export default Scroll;
