import React, { useState } from "react";
import Link from "next/link";
import { AiFillCaretRight } from "react-icons/ai";
import { SidebarData } from "../Layout/SidebarData";
import classes from "./LayoutComponent.module.css";
import { AiOutlineForm } from "react-icons/ai";
import { BsClipboard } from "react-icons/bs";

const sideComponent = () => {
  const [subnav, setSubnav] = useState(false);

  // const showSubnav = () => {
  //   setSubnav(!subnav);
  // };
  return (
    <div className={classes.sideBar}>
      {/* <div className={classes.sidebar_logo}>APP</div> */}
      <div className={classes.sidebar_list}>
        <ul className={classes.sidebarUl}>
          <li className={classes.sidebarLi}>
            <Link href="/form">
              <h5 className={classes.sidebarLinkH5}>
                <AiOutlineForm className={classes.sidebarLinkH5Icon} />
                From
              </h5>
            </Link>
          </li>
          <li className={classes.sidebarLi}>
            <Link href="/dashboard">
              <h5 className={classes.sidebarLinkH5}>
                <BsClipboard className={classes.sidebarLinkH5Icon} />
                Dash Board
              </h5>
            </Link>
          </li>
        </ul>
        {/* <ul>
          {SidebarData.map((val, key) => {
            return (
              <li
                className={classes.sidebar_row}
                key={key}
                onClick={() => {
                  window.location.pathname = val.path;
                }}
              >
                <li>
                  <Link href={val.path} className={classes.sidebar_row} key={key}>
                    <div>{val.icon}</div>
                    <div>{val.title}</div>
                    <div>
                  {val.subNav && subnav ? val.iconOpened : val.subNav ? val.iconClosed : null}
                </div>
                  </Link>
                </li>
              </li>
            );
          })}
        </ul> */}
      </div>
    </div>
  );
};

export default sideComponent;
