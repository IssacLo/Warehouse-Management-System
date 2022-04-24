import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import NavComponent from "./NavComponent";
import SidebarComponent from "./SidebarComponent";
// import HomeComponent from "../Home";
import FormComponent from "../Form/FormComponent";
import FooterComponent from "./FooterComponent";
import SigninComponent from "../Signin/SigninComponent";
import SignupComponent from "../Signup/SignupComponent";
import classes from "./LayoutComponent.module.css";

const LayoutComponent = (props) => {
  const { children, currentUser, setCurrentUser } = props;
  const router = useRouter();

  // console.log(!currentUser);
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.grid}>
      <div className={classes.nav}>
        <NavComponent currentUser={currentUser} setCurrentUser={setCurrentUser} />
      </div>
      <div className={classes.side}>
        <SidebarComponent />
      </div>
      {/* {!currentUser && (
        <SigninComponent currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )} */}
      {/* {children} */}
      <div className={classes.main}>{children}</div>
      {/* <div className={classes.foot}>
        <FooterComponent />
      </div> */}
    </div>
  );
};

export default LayoutComponent;
