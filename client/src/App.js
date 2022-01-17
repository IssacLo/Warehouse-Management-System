// import logo from "./logo.svg";
import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import NavComponent from "./component/navComponent";
import SideComponent from "./component/sideComponent";
import HomeComponent from "./component/homeComponent";
import AboutComponent from "./component/aboutComponent";

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

      {/* <Route path="/about" exact>
        <AboutComponent />
      </Route> */}
    </div>
  );
}

export default App;
