import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";
// import "./side.css";
import { SidebarData } from "./SidebarData";

const sideComponent = () => {
  // const [subnav, setSubnav] = useState(false);

  // const showSubnav = () => {
  //   setSubnav(!subnav);
  // };
  return (
    <div className="sidebar">
      <div className="sidebar-logo">APP</div>
      <div className="sidebar-list">
        <ul>
          {SidebarData.map((val, key) => {
            return (
              <li
                className="sidebar-row"
                key={key}
                onClick={() => {
                  window.location.pathname = val.path;
                }}
              >
                <div>{val.icon}</div>
                <div>{val.title}</div>
                {/* <div>
                  {val.subNav && subnav ? val.iconOpened : val.subNav ? val.iconClosed : null}
                </div> */}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default sideComponent;
