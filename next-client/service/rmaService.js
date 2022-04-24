import axios from "axios";
const API_URL = "http://localhost:8080/api/rma";

class RmaService {
  postRma({ category, model, serialNumber, details, request, address, phoneNumber }) {
    let user;
    if (localStorage.getItem("user")) {
      user = JSON.parse(localStorage.getItem("user")).user;
    } else {
      user = "";
    }
    // console.log(category, model, serialNumber, details, request, address, phoneNumber, "category");

    return axios.post(
      API_URL,
      { category, model, serialNumber, details, request, address, phoneNumber, user }

      // {
      //   headers: {
      //     Authorization: token,
      //   },
      // }
    );
  }
}

export default new RmaService();
