import React, { useState, useEffect } from "react";
import DashBoardComponent from "../../component/DashBoard/DashBoardComponent";
import ItemService from "../../service/itemService";

function DashBoard(props) {
  const { item, currentUser, setCurrentUser } = props;
  // const _id = currentUser.user;
  // console.log(item, "item");
  //   console.log(_id, "item");
  //   useEffect(() => {
  //     console.log("Using Effect On ShowPage");
  //     let _id;s
  //     if (currentUser) {
  //       //   delete currentUser.user.password;
  //       //   delete currentUser.user.date;
  //       _id = currentUser.user;

  //       // console.log(_id, "id");
  //     } else {
  //       _id = "";
  //     }
  //   }, []);
  return (
    <div>
      <DashBoardComponent item={item} currentUser={currentUser} setCurrentUser={setCurrentUser} />
    </div>
  );
}

// export async function getStaticProps(props) {
//   const { currentUser } = props;
//   const _id = currentUser.user;
//   const res = await ItemService.getItem(_id);
//   const item = res.data;
//   return {
//     props: {
//       item,
//     },
//   };
// }

export default DashBoard;
