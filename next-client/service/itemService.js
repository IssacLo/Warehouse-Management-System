import axios from "axios";
const API_URL = "http://localhost:8080/api/item";

class ItemService {
  getItem(_id) {
    return axios.get(API_URL);
  }

  postItem({
    general: { itemDescription, category, model, serialNumber, itemStatus, remarks },
    vendor: { vendor, originalInvoice, purchaseCost, purchaseDate },
    client: { client, clientInvoice, clientContractExpirationDate, warrantyPeriod, warrantyTC },
    serviceCenter: { address, phoneNumber },
  }) {
    return axios
      .post(API_URL, {
        general: { itemDescription, category, model, serialNumber, itemStatus, remarks },
        vendor: { vendor, originalInvoice, purchaseCost, purchaseDate },
        client: {
          client,
          clientInvoice,
          clientContractExpirationDate,
          warrantyPeriod,
          warrantyTC,
        },
        serviceCenter: { address, phoneNumber },
      })
      .then((response) => {
        console.log("axios is work", response);
      })
      .catch((error) => {
        console.log("axios is not work", error);
      });
  }
}

export default new ItemService();
