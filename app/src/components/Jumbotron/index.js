import React from "react";
import "./style.css"

function Jumbotron({ children }) {
  return (
    <div
      style={{ zheight: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}


export default Jumbotron;