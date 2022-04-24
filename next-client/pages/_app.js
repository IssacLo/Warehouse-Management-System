import React, { useState } from "react";
import Layout from "../component/Layout/LayoutComponent";
// import Signin from "../component/Signin/SigninComponent";
import "../styles/globals.css";
import AuthService from "../service/authService";
import createPersistedState from "use-persisted-state";
const useUserState = createPersistedState("user");

function MyApp({ Component, pageProps }) {
  const [currentUser, setCurrentUser] = useUserState("");
  // console.log("123", currentUser);

  return (
    <Layout currentUser={currentUser} setCurrentUser={setCurrentUser}>
      <Component {...pageProps} currentUser={currentUser} setCurrentUser={setCurrentUser} />
    </Layout>
  );
}

// export async function getStaticProps() {
//   const user = await AuthService.getCurrentUser();
//   console.log(user, "user");

//   return {
//     props: user,
//   };
// }

export default MyApp;
