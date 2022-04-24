import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import classes from "../Home/HomeComponent.module.css";
import axios from "axios";
import ItemService from "../../service/itemService";

const HomeComponent = (props) => {
  const { currentUser, setCurrentUser } = props;
  // console.log(currentUser, "123123");
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { item } = props;
  // console.log(item, "porops");
  // console.log(item);
  // console.log(error);
  // console.log("123123");

  // useEffect(() => {
  //   if (!currentUser) {
  //     router.push("/signin");
  //     console.log("123");
  //   } else {
  //     router.push("/");
  //   }
  //   // setOpen(true);
  // }, []);
  return (
    <>
      {/* // <ul>
    //   {item.map((item) => {
    //     <li key={item.id}>{item.client}</li>;
    //   })}
    // </ul> */}
      {/* {open && (
        <div className={classes.background}>
          <div className={classes.container}>
            <div className={classes.title}>
              <h1 className={classes.h1}>Sign In</h1>
            </div>
          </div>
        </div>
      )} */}

      <div className={classes.background}>homeee</div>
    </>
  );
};

export default HomeComponent;
