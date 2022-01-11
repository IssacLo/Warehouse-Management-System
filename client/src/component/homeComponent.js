import React, { useState } from "react";
import "./Home.css";
import ItemService from "../service/itemService";

const HomeComponent = () => {
  const [itemDescription, setItemDescription] = useState("");
  const [category, setCategory] = useState("");
  const [model, setModel] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [itemStatus, setItemStatus] = useState("");
  const [remarks, setRemarks] = useState("");
  const [vendor, setVendor] = useState("");
  const [originalInvoice, setOriginalInvoice] = useState("");
  const [purchaseCost, setPurchaseCost] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [client, setClient] = useState("");
  const [clientInvoice, setClientInvoice] = useState("");
  const [clientContractExpirationDate, setClientContractExpirationDate] = useState("");
  const [warrantyPeriod, setWarrantyPeriod] = useState("");
  const [warrantyTC, setWarrantyTC] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChangeItemDescription = (e) => {
    setItemDescription(e.target.value);
    console.log(e.target.value);
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
    console.log(e.target.value);
  };
  const handleChangeModel = (e) => {
    setModel(e.target.value);
    console.log(e.target.value);
  };
  const handleChangeSerialNumber = (e) => {
    setSerialNumber(e.target.value);
    console.log(e.target.value);
  };
  const handleChangetItemStatus = (e) => {
    setItemStatus(e.target.value);
    console.log(e.target.value);
  };
  const handleChangeRemarks = (e) => {
    setRemarks(e.target.value);
    console.log(e.target.value);
  };
  const handleChangeVendor = (e) => {
    setVendor(e.target.value);
    console.log(e.target.value);
  };
  const handleChangOriginalInvoice = (e) => {
    setOriginalInvoice(e.target.value);
    console.log(e.target.value);
  };
  const handleChangePurchaseCost = (e) => {
    setPurchaseCost(e.target.value);
    console.log(e.target.value);
  };
  const handleChangePurchaseDate = (e) => {
    setPurchaseDate(e.target.value);
    console.log(e.target.value);
  };
  const handleChangeClient = (e) => {
    setClient(e.target.value);
    console.log(e.target.value);
  };
  const handleChangeClientInvoice = (e) => {
    setClientInvoice(e.target.value);
    console.log(e.target.value);
  };
  const handleChangeClientContractExpirationDate = (e) => {
    setClientContractExpirationDate(e.target.value);
    console.log(e.target.value);
  };
  const handleChangeWarrantyPeriod = (e) => {
    setWarrantyPeriod(e.target.value);
    console.log(e.target.value);
  };
  const handleChangeWarrantyTC = (e) => {
    setWarrantyTC(e.target.value);
    console.log(e.target.value);
  };
  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
    console.log(e.target.value);
  };
  const handleChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
    console.log(e.target.value);
  };

  const handlePostItem = (e) => {
    ItemService.postItem({
      general: { itemDescription, category, model, serialNumber, itemStatus, remarks },
      vendor: { vendor, originalInvoice, purchaseCost, purchaseDate },
      client: { client, clientInvoice, clientContractExpirationDate, warrantyPeriod, warrantyTC },
      serviceCenter: { address, phoneNumber },
    })
      .then((data) => {
        console.log("data = ", data);
      })
      .catch((error) => {
        console.log("error =", error);
      });
  };

  return (
    <div>
      <div className="form-content">
        <div className="page-content">page</div>
        <form>
          <label>Item Description</label>
          <input
            className="input-content"
            type="text"
            name="itemDescription"
            onChange={handleChangeItemDescription}
          ></input>
          <label>Category</label>
          <select className="input-content" name="category" onChange={handleChangeCategory}>
            <option value="">Select your option</option>
            <option value="Hard Disk ">Hard Disk </option>
            <option value="Notebook ">Notebook </option>
            <option value="Desktop">Desktop </option>
            <option value="Server ">Server </option>
            <option value="UPS ">UPS </option>
            <option value="Firewall ">Firewall </option>
            <option value="Printer ">Printer </option>
            <option value="RAM ">RAM </option>
            <option value="Monitor ">Monitor </option>
            <option value="Software ">Software </option>
            <option value="Antivirus  ">Antivirus </option>
          </select>
          <label>Model </label>
          <input
            className="input-content"
            type="text"
            name="model"
            onChange={handleChangeModel}
          ></input>
          <label>Serial Number</label>
          <input
            className="input-content"
            type="text"
            name="serialNumber"
            onChange={handleChangeSerialNumber}
          ></input>
          <label>Status </label>
          <select className="input-content" name="itemStatus" onChange={handleChangetItemStatus}>
            <option value="">Select your option</option>
            <option value="Stock ">Stock </option>
            <option value="In-use  ">In-use </option>
            <option value="Disposed ">Disposed </option>
          </select>
          <label>Remarks</label>
          <textarea
            className="input-content"
            name="remarks"
            onChange={handleChangeRemarks}
          ></textarea>

          <label>Vendor</label>
          <select className="input-content" name="vendor" onChange={handleChangeVendor}>
            <option value="">Select your option</option>
            <option value="Vendor1 ">Vendor1 </option>
            <option value="Vendor2 ">Vendor2 </option>
            <option value="Vendor3">Vendor3 </option>
            <option value="Vendor4  ">Vendor4 </option>
          </select>
          <label>Original Invoice </label>
          <input
            className="input-content"
            type="text"
            name="originalInvoice"
            onChange={handleChangOriginalInvoice}
          ></input>
          <label>Purchase Cost</label>
          <input
            className="input-content"
            type="text"
            name="purchaseCost"
            onChange={handleChangePurchaseCost}
          ></input>
          <label>Purchase Date </label>
          <input
            className="input-content"
            type="date"
            name="purchaseDate"
            onChange={handleChangePurchaseDate}
          ></input>
          <label>Client</label>
          <select className="input-content" name="client" onChange={handleChangeClient}>
            <option value="">Select your option</option>
            <option value="Client1 ">Client1 </option>
            <option value="Client2 ">Client2 </option>
            <option value="Client3">Client3 </option>
            <option value="Client4  ">Client4 </option>
          </select>
          <label>Client Invoice</label>
          <input
            className="input-content"
            type="text"
            name="clientInvoice"
            onChange={handleChangeClientInvoice}
          ></input>
          <label>Client Contract Expiration Date </label>
          <input
            className="input-content"
            type="date"
            name="clientContractExpirationDate"
            onChange={handleChangeClientContractExpirationDate}
          ></input>
          <label>Warranty Period </label>
          <input
            className="input-content"
            type="date"
            name="warrantyPeriod"
            onChange={handleChangeWarrantyPeriod}
          ></input>
          <label>Warranty T&C </label>
          <textarea
            className="input-content"
            name=""
            name="warrantyTC"
            onChange={handleChangeWarrantyTC}
          ></textarea>
          <label>Address </label>
          <textarea
            className="input-content"
            name=""
            name="address"
            onChange={handleChangeAddress}
          ></textarea>
          <label>Phone number</label>
          <input
            className="input-content"
            type="number"
            name="phoneNumber"
            onChange={handleChangePhoneNumber}
          ></input>
          <span onClick={handlePostItem}>Submit</span>
        </form>
      </div>
    </div>
  );
};

export default HomeComponent;
