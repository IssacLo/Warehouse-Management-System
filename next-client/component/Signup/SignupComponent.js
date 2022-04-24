import React, { useState } from "react";
import AuthService from "../../service/authService";
import classes from "./SignupComponent.module.css";
import Link from "next/link";

const SignupComponent = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // console.log("hihi");
    AuthService.register(username, email, password)
      .then((data) => {
        // setMessageOne("Registration succeeds");
        console.log("signup success");
        console.log(data);
        // window.alert("Registration succeeds. You are now to redirected to login page.");
        // history.push("/signin");
      })
      .catch((error) => {
        console.log(error.response);
        // setMessage(error.response.data);
        // setOpen(true);
      });
  };
  return (
    <div>
      <div className={classes.background}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h3>Welcome !</h3>
            <p>Create your account to continue</p>
          </div>
          <div className={classes.formContainer}>
            <form className={classes.formContent}>
              <div className={classes.formPart}>
                <input
                  onChange={handleChangeUsername}
                  type="text"
                  className={classes.formInput}
                  name="username"
                  placeholder=" "
                />
                <label htmlFor="username" className={classes.formLabel}>
                  User Name
                </label>
              </div>
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
              {/* <label htmlFor="password">Enter Password Again</label>
        <input
          onChange={handleChangePassword}
          type="password"
          // className="form-control"
          name="password"
        /> */}

              <button className={classes.formButton} onClick={handleRegister}>
                Sign Up
              </button>
              <div className={classes.formFooter}>
                <span>Already have an account?</span>

                <Link href="/signin">
                  <button className={classes.formButton2}>Sing In</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;
