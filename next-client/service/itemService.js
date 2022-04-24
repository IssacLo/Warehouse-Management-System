import axios from "axios";
const API_URL = "http://localhost:8080/api/item";

class ItemService {
  getItem(_id) {
    // let token;
    // if (localStorage.getItem("user")) {
    //   token = JSON.parse(localStorage.getItem("user")).token;
    // } else {
    //   token = "";
    // }

    // console.log(_id, "_id");

    return axios.post(
      API_URL + "/allItem",
      { _id }
      // {
      //   headers: {
      //     Authorization: token,
      //   },
      // }
    );
  }
  getOneItem(_id) {
    return axios.post(
      API_URL + "/oneItem/" + _id

      // {
      //   headers: {
      //     Authorization: token,
      //   },
      // }
    );
  }

  postItem({
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
  }) {
    let userId;
    if (localStorage.getItem("user")) {
      userId = JSON.parse(localStorage.getItem("user")).user;
    } else {
      userId = "";
    }
    // console.log(warrantyStartDate, "warrantyStartDate");

    return axios.post(
      API_URL,
      {
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
        user: userId,
      }

      // {
      //   headers: {
      //     Authorization: token,
      //   },
      // }
    );
  }
}

export default new ItemService();
