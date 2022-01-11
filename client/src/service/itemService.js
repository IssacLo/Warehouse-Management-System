import axios from "axios";
const API_URL = "http://localhost:8080/api/item";

class ItemService {
  postItem(
    {
      general: { itemDescription, category, model, serialNumber, itemStatus, remarks },
      vendor: { vendor, originalInvoice, purchaseCost, purchaseDate },
      client: { client, clientInvoice, clientContractExpirationDate, warrantyPeriod, warrantyTC },
      serviceCenter: { address, phoneNumber },
    } // itemDescription,
  ) // category,
  // model,
  // serialNumber,
  // itemStatus,
  // remarks,
  // vendor,
  // originalInvoice,
  // purchaseCost,
  // purchaseDate,
  // client,
  // clientInvoice,
  // clientContractExpirationDate,
  // warrantyPeriod,
  // warrantyTC,
  // address,
  // phoneNumber
  {
    console.log(
      itemDescription,
      category,
      model,
      serialNumber,
      itemStatus,
      remarks,
      vendor,
      originalInvoice,
      purchaseCost,
      purchaseDate,
      client,
      clientInvoice,
      clientContractExpirationDate,
      warrantyPeriod,
      warrantyTC,
      address,
      phoneNumber,
      "itemDescription"
    );
    axios
      .post(API_URL, {
        // general: { itemDescription, category, model, serialNumber, itemStatus, remarks },
        // vendor: { vendor, original, purchaseCost, purchaseDate },
        // client: {
        //   client,
        //   clientInvoice,
        //   clientContractExpirationDate,
        //   warrantyPeriod,
        //   warrantyTC,
        // },
        // serviceCenter: { address, phoneNumber },
        itemDescription,
        category,
        model,
        serialNumber,
        itemStatus,
        remarks,
        vendor,
        originalInvoice,
        purchaseCost,
        purchaseDate,
        client,
        clientInvoice,
        clientContractExpirationDate,
        warrantyPeriod,
        warrantyTC,
        address,
        phoneNumber,
      })
      .then(() => {
        console.log("axios is work");
      })
      .catch(() => {
        console.log("axios is not work");
      });
  }
}

export default new ItemService();
