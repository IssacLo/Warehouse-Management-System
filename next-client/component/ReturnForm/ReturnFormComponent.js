import React, { useState, useEffect } from "react";
import RmaService from "../../service/rmaService";
import classes from "./ReturnFormComponent.module.css";

function ReturnFormComponent(props) {
  const { currentUser, setCurrentUser } = props;
  const [category, setCategory] = useState("");
  const [model, setModel] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [details, setDetails] = useState("");
  const [request, setRequest] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
    // console.log(e.target.value);
  };
  const handleChangeModel = (e) => {
    setModel(e.target.value);
    // console.log(e.target.value);
  };
  const handleChangeSerialNumber = (e) => {
    setSerialNumber(e.target.value);
    // console.log(e.target.value);
  };
  const handleChangeDetails = (e) => {
    setDetails(e.target.value);
    // console.log(e.target.value);
  };
  const handleChangeRequest = (e) => {
    setRequest(e.target.value);
    // console.log(e.target.value);
  };
  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
    // console.log(e.target.value);
  };
  const handleChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
    // console.log(e.target.value);
  };

  const handlePostRma = (e) => {
    e.preventDefault();
    // console.log(e);

    RmaService.postRma({
      category,
      model,
      serialNumber,
      details,
      request,
      address,
      phoneNumber,
    })
      .then((data) => {
        console.log("data =", data);
      })
      .catch((error) => {
        console.log("error =", error);
      });
  };

  return (
    <div className={classes.background}>
      {!currentUser && <div>You should sign in first</div>}
      <div className={classes.container}>
        <form className={classes.formContainer}>
          <div className={classes.formWrap}>
            <div className={classes.formPart}>
              <input
                type="text"
                onChange={handleChangeCategory}
                className={classes.formInput}
                placeholder=" "
              />
              <label className={classes.formLabel}>Category</label>
            </div>
            <div className={classes.formPart}>
              <input
                type="text"
                onChange={handleChangeModel}
                className={classes.formInput}
                placeholder=" "
              />
              <label className={classes.formLabel}>Model</label>
            </div>
            <div className={classes.formPart}>
              <input
                type="text"
                onChange={handleChangeSerialNumber}
                className={classes.formInput}
                placeholder=" "
              />
              <label className={classes.formLabel}>Serial Number</label>
            </div>
            <div className={classes.formPart}>
              <input
                type="text"
                onChange={handleChangeDetails}
                className={classes.formInput}
                placeholder=" "
              />
              <label className={classes.formLabel}>Details</label>
            </div>
            <div className={classes.formPart}>
              <input
                type="text"
                onChange={handleChangeRequest}
                className={classes.formInput}
                placeholder=" "
              />
              <label className={classes.formLabel}>Request</label>
            </div>
            <div className={classes.formPart}>
              <input
                type="text"
                onChange={handleChangeAddress}
                className={classes.formInput}
                placeholder=" "
              />
              <label className={classes.formLabel}>Address</label>
            </div>
            <div className={classes.formPart}>
              <input
                type="text"
                onChange={handleChangePhoneNumber}
                className={classes.formInput}
                placeholder=" "
              />
              <label className={classes.formLabel}>Phone Number</label>
            </div>
            <button onClick={handlePostRma} className={classes.formButton}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReturnFormComponent;
