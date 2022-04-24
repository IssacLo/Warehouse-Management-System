import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ItemService from "../../service/itemService";
import Image from "next/image";
import classes from "./FormComponent.module.css";
import { AiOutlineFileImage } from "react-icons/ai";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const FormComponent = (props) => {
  const { currentUser, setCurrentUser } = props;
  const [itemDescription, setItemDescription] = useState("");
  const [category, setCategory] = useState("");
  const [model, setModel] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [itemStatus, setItemStatus] = useState("");
  const [remarks, setRemarks] = useState("");
  const [vendor, setVendor] = useState("");
  const [originalInvoice, setOriginalInvoice] = useState("");
  const [imageFile, setImageFile] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [purchaseCost, setPurchaseCost] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [client, setClient] = useState("");
  const [clientInvoice, setClientInvoice] = useState("");
  const [clientContractExpirationDate, setClientContractExpirationDate] = useState("");
  const [warrantyPeriod, setWarrantyPeriod] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const [warrantyStartDate, setWarrantyStartDate] = useState("");
  const [warrantyEndDate, setWarrantyEndDate] = useState("");
  const [warrantyTC, setWarrantyTC] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChangeItemDescription = (e) => {
    setItemDescription(e.target.value);
    // console.log(e.target.value);
  };

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
  const handleChangeItemStatus = (e) => {
    setItemStatus(e.target.value);
    // console.log(e.target.value);
  };
  const handleChangeRemarks = (e) => {
    setRemarks(e.target.value);
    // console.log(e.target.value);
  };
  const handleChangeVendor = (e) => {
    setVendor(e.target.value);
    // console.log(e.target.value);
  };

  const handleChangOriginalInvoice = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setOriginalInvoice(reader.result);
    };
  };

  const handleChangePurchaseCost = (e) => {
    setPurchaseCost(e.target.value);
    // console.log(e.target.value);
  };
  const handleChangePurchaseDate = (e) => {
    setPurchaseDate(e.target.value);
    // console.log(e.target.value);
  };
  const handleChangeClient = (e) => {
    setClient(e.target.value);
    // console.log(e.target.value);
  };
  const handleChangeClientInvoice = (e) => {
    setClientInvoice(e.target.value);
    // console.log(e.target.value);
  };
  const handleChangeClientContractExpirationDate = (e) => {
    const date = e.target.vaule;

    setClientContractExpirationDate(e.target.value);
    // console.log();
  };
  const handleChangeWarrantyPeriod = (e) => {
    setWarrantyPeriod([e.selection]);
    setWarrantyStartDate(e.selection.startDate);
    setWarrantyEndDate(e.selection.endDate);
    // console.log(e.selection.startDate, "s");
    // console.log(e.selection.endDate, "e");
  };
  const handleChangeWarrantyTC = (e) => {
    setWarrantyTC(e.target.value);
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

  // console.log(currentUser, "currentUser");

  // const uploadImage = (image) => {
  //   console.log(image, "image");
  // };

  const handlePostItem = (e) => {
    e.preventDefault();
    // console.log(e);
    if (!originalInvoice) return;
    // uploadImage(originalInvoice);

    ItemService.postItem({
      general: { itemDescription, category, model, serialNumber, itemStatus, remarks },
      vendor: { vendor, originalInvoice, purchaseCost, purchaseDate },
      client: {
        client,
        clientInvoice,
        clientContractExpirationDate,
        warrantyStartDate,
        warrantyEndDate,
        warrantyTC,
      },
      serviceCenter: { address, phoneNumber },
    })
      .then((data) => {
        console.log("data =", data);
      })
      .catch((error) => {
        console.log("error =", error);
      });
  };

  useEffect(() => {
    console.log("Using effect");
    // ItemService.getItem()
    //   .then((data) => {
    //     console.log("data", data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

  // const handleSelect = (date) => {
  //   console.log(date); // native Date object
  // };

  // const selectionRange = {
  //   startDate: new Date(),
  //   endDate: new Date(),
  //   key: "selection",
  // };

  return (
    <div className={classes.background}>
      {!currentUser && <div>You have not sign in yet</div>}
      {currentUser && (
        <div className={classes.container}>
          <form className={classes.formContainer}>
            <div className={classes.formWrap}>
              <h2 className={classes.formH2}>General</h2>
              <div className={classes.formWrap_1}>
                <div className={classes.formGeneralPartOne}>
                  <div className={classes.formPart}>
                    <select
                      className={classes.formSelect}
                      name="category"
                      onChange={handleChangeCategory}
                      placeholder=" "
                    >
                      <option value="Disabled Selected"> </option>
                      <option value="Hard Disk">Hard Disk </option>
                      <option value="Notebook">Notebook </option>
                      <option value="Desktop">Desktop </option>
                      <option value="Server">Server </option>
                      <option value="UPS">UPS </option>
                      <option value="Firewall">Firewall </option>
                      <option value="Printer">Printer </option>
                      <option value="RAM">RAM </option>
                      <option value="Monitor">Monitor </option>
                      <option value="Software">Software </option>
                      <option value="Antivirus">Antivirus </option>
                    </select>
                    <label className={classes.formLabel}>Category</label>
                  </div>
                  <div className={classes.formPart}>
                    <input
                      className={classes.formInput}
                      type="text"
                      name="serialNumber"
                      onChange={handleChangeSerialNumber}
                      placeholder=" "
                    />
                    <label className={classes.formLabel}>Serial Number</label>
                  </div>
                  <div className={classes.formPart}>
                    <input
                      className={classes.formInput}
                      type="text"
                      name="model"
                      onChange={handleChangeModel}
                      placeholder=" "
                    />
                    <label className={classes.formLabel}>Model</label>
                  </div>
                </div>
                <div className={classes.formGeneralPartTwo}>
                  <div className={classes.formPart}>
                    <input
                      className={classes.formInput}
                      type="text"
                      name="itemDescription"
                      onChange={handleChangeItemDescription}
                      placeholder=" "
                    />
                    <label className={classes.formLabel}>Description</label>
                  </div>
                  <div className={classes.formPart}>
                    <select
                      className={classes.formSelect}
                      name="itemStatus"
                      onChange={handleChangeItemStatus}
                      placeholder=" "
                    >
                      <option value="Disabled Selected"> </option>
                      <option value="Stock">Stock </option>
                      <option value="In-use">In-use </option>
                      <option value="Disposed">Disposed </option>
                    </select>{" "}
                    <label className={classes.formLabel}>Status</label>
                  </div>
                  <div className={classes.formPart}>
                    <textarea
                      className={classes.formInput}
                      name="remarks"
                      onChange={handleChangeRemarks}
                      placeholder=" "
                    />
                    <label className={classes.formLabel}>Remarks</label>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.formWrap}>
              <h2 className={classes.formH2}>Client</h2>
              <div className={classes.formWrap_1}>
                <div className={classes.formClientPartOne}>
                  <div className={classes.formPart}>
                    <select
                      className={classes.formSelect}
                      name="client"
                      onChange={handleChangeClient}
                      placeholder=" "
                    >
                      <option value="Disabled Selected"> </option>
                      <option value="Client1">Client1 </option>
                      <option value="Client2">Client2 </option>
                      <option value="Client3">Client3 </option>
                      <option value="Client4">Client4 </option>
                    </select>{" "}
                    <label className={classes.formLabel}>Client</label>
                  </div>
                  <div className={classes.formPart}>
                    <input
                      className={classes.formInput}
                      type="text"
                      name="clientInvoice"
                      onChange={handleChangeClientInvoice}
                      placeholder=" "
                    />
                    <label className={classes.formLabel}>Client Invoice</label>
                  </div>
                  <div className={classes.formPart}>
                    <input
                      className={classes.formInput}
                      type="date"
                      name="clientContractExpirationDate"
                      onChange={handleChangeClientContractExpirationDate}
                      placeholder=" "
                    />
                    <label className={classes.formLabel}>Client Contract Expiration Date </label>
                  </div>
                  <div className={classes.formPart}>
                    <textarea
                      className={classes.formInput}
                      name="warrantyTC"
                      onChange={handleChangeWarrantyTC}
                      placeholder=" "
                    />
                    <label className={classes.formLabel}>Warranty T&C </label>
                  </div>
                </div>
                <div className={classes.formClientPartTwo}>
                  <div className={classes.formPart}>
                    {/* <input
                      className={classes.formInput}
                      type="date"
                      name="warrantyPeriod"
                      onChange={handleChangeWarrantyPeriod}
                      placeholder=" "
                    /> */}
                    <label>Warranty Period </label>
                    <DateRange
                      className={classes.formDateRange}
                      editableDateInputs={true}
                      onChange={handleChangeWarrantyPeriod}
                      moveRangeOnFirstSelection={false}
                      ranges={warrantyPeriod}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.formWrap}>
              <h2 className={classes.formH2}>Vendor</h2>
              <div className={classes.formWrap_1}>
                <div className={classes.formVendorPartOne}>
                  <div className={classes.formPart}>
                    <select
                      className={classes.formSelect}
                      name="vendor"
                      onChange={handleChangeVendor}
                      placeholder=" "
                    >
                      <option value="Disabled Selected"> </option>
                      <option value="Vendor1">Vendor1 </option>
                      <option value="Vendor2">Vendor2 </option>
                      <option value="Vendor3">Vendor3 </option>
                      <option value="Vendor4">Vendor4 </option>
                    </select>
                    <label className={classes.formLabel}>Vendor</label>
                  </div>
                  <div className={classes.formInvoiceCard}>
                    <div className={classes.formInvoicePart}>
                      <input
                        // className={classes.formInvoice}
                        type="file"
                        name="originalInvoice"
                        onChange={handleChangOriginalInvoice}
                        value={imageFile}
                        placeholder=" "
                      />
                      <button
                      // className={classes.formInvoiceButton}
                      >
                        <AiOutlineFileImage />
                        Upload
                      </button>
                      <p>Support File : JPG, PNG</p>
                      <p>Upload ONE picture only</p>
                    </div>

                    {/* <label className={classes.formLabel}>Original Invoice </label> */}
                    {/* <Image src={previewSource} alt="image" width={20} height={20} /> */}
                    {/* <div className={classes.formInvoiceImage}> */}
                    {originalInvoice && (
                      <Image
                        src={originalInvoice}
                        alt="Original Invoice"
                        width={200}
                        height={100}
                      />
                    )}
                    {/* </div> */}
                  </div>
                </div>
                <div className={classes.formVendorPartTwo}>
                  <div className={classes.formPart}>
                    <input
                      className={classes.formInput}
                      type="text"
                      name="purchaseCost"
                      onChange={handleChangePurchaseCost}
                      placeholder=" "
                    />
                    <label className={classes.formLabel}>Purchase Cost</label>
                  </div>
                  <div className={classes.formPart}>
                    <input
                      className={classes.formInput}
                      type="date"
                      name="purchaseDate"
                      onChange={handleChangePurchaseDate}
                      placeholder=" "
                    />
                    <label className={classes.formLabel}>Purchase Date </label>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.formWrap}>
              <h2 className={classes.formH2}>Service Center</h2>
              <div className={classes.formWrap_1}>
                <div className={classes.formPart}>
                  <textarea
                    className={classes.formInput}
                    name="address"
                    onChange={handleChangeAddress}
                    placeholder=" "
                  />
                  <label className={classes.formLabel}>Address </label>
                </div>
                <div className={classes.formPart}>
                  <input
                    className={classes.formInput}
                    type="number"
                    name="phoneNumber"
                    onChange={handleChangePhoneNumber}
                    placeholder=" "
                  />
                  <label className={classes.formLabel}>Phone number</label>
                </div>
              </div>
            </div>
            <button className={classes.formButton} onClick={handlePostItem}>
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FormComponent;
