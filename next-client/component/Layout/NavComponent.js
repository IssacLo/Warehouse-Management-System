// import "./Nav.css";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import classes from "./LayoutComponent.module.css";
import AuthService from "../../service/authService";
import Logo from "../image/vico.logo.png";

const navComponent = (props) => {
  const { currentUser, setCurrentUser } = props;
  const [open, setOpen] = useState(true);
  const router = useRouter();
  // console.log(currentUser.user.username, "cu");

  const handleLogout = () => {
    AuthService.logout();
    // window.alert("Logout Successfully,now you are redirect to homepage ");
    setCurrentUser(null);
    console.log("LogOUTEDDDDDDDDD");
    router.push("/");
    // setOpen(false);
  };

  useEffect(() => {
    if (!currentUser) {
      router.push("/signin");
      // console.log("123");
    }
    // setOpen(true);
  }, []);

  return (
    <nav className={classes.navBar}>
      <div className={classes.navContainer}>
        {/* <div> */}
        <Link href="/">
          <div className={classes.navLogoContainer}>
            <Image src={Logo} alt="logo" className={classes.nav_logo} />
            <p className={classes.navLogoP}>Warehouse Management System</p>
          </div>
        </Link>
        {/* </div> */}
        <div className={classes.navButtonContainer1}>
          {!currentUser && (
            <div className={classes.navButtonContainer2}>
              <Link href="/signup" className={classes.navLink}>
                <button className={classes.navButton}>Sign Up</button>
              </Link>
              <Link href="/signin" className={classes.navLink}>
                <button className={classes.navButton}>Sign In</button>
              </Link>
            </div>
          )}
          {currentUser && (
            <button className={classes.navButton} onClick={handleLogout}>
              Sign Out
            </button>
          )}
          {/* {open && currentUser && <div>{currentUser.user.username}</div>} */}
        </div>
      </div>
    </nav>
  );
};

export default navComponent;
