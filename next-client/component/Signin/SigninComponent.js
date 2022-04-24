import React, { useState } from "react";
import { useRouter } from "next/router";

import AuthService from "../../service/authService";
import Link from "next/link";
import classes from "./SigninComponent.module.css";

const SigninComponent = (props) => {
  const { currentUser, setCurrentUser } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // const [open, setOpen]=useState(false)

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    AuthService.login(email, password)
      .then((response) => {
        // console.log(response.data, "dadada");
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        setCurrentUser(AuthService.getCurrentUser);
        router.push("/form");
        // setMessageOne(setTimeout(() => {
        //   history.push("/profile1")
        // }, 3000));
        // window.alert("Login successfully, you are now redirected to profile page");
      })
      .catch((error) => {
        console.log(error, "error");
        // setMessage(error.response.data);
        // setOpen(true);
      });
  };
  return (
    <div>
      {/* {open && ( */}
      {!currentUser && (
        <div className={classes.background}>
          <div className={classes.container}>
            <div className={classes.title}>
              <h3>Welcome back !</h3>
              <p>Sign in to your account to continue</p>
            </div>
            <div className={classes.formContainer}>
              <form className={classes.formContent}>
                <div className={classes.formPart}>
                  <input
                    onChange={handleChangeEmail}
                    type="text"
                    className={classes.formInput}
                    name="email"
                    placeholder=" "
                  />
                  <label htmlFor="username" className={classes.formLabel}>
                    Email
                  </label>
                </div>
                <div className={classes.formPart}>
                  <input
                    onChange={handleChangePassword}
                    type="password"
                    className={classes.formInput}
                    name="password"
                    placeholder=" "
                  />
                  <label htmlFor="password" className={classes.formLabel}>
                    Password
                  </label>
                </div>
                <button type="submit" className={classes.formButton} onClick={handleLogin}>
                  <span>Sign In</span>
                </button>
                <div className={classes.formFooter}>
                  <span>Don’t have an account?</span>
                  <Link href="/signup">
                    <button className={classes.formButton2}>Sing Up</button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {currentUser && <div>You SignIn Already</div>}
    </div>
  );
};

export default SigninComponent;
