// import logo from "./logo.svg";
import React from "react";
// import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavComponent from "./component/navComponent";
import SideComponent from "./component/sideComponent";
import HomeComponent from "./component/homeComponent";

function App() {
  return (
    <div className="gridContainer">
      <div className="navComponent">
        <NavComponent />
      </div>
      <div className="sideComponent">
        <SideComponent />
      </div>
      <div className="homeComponent">
        <HomeComponent />
      </div>
    </div>
  );
}

export default App;
