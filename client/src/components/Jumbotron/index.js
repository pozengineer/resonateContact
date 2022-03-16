import React from "react";
import Material from "../../assets/images/contactus.jpg";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 225, textAlign: "center", backgroundImage: `url(${Material})`, backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}} className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
