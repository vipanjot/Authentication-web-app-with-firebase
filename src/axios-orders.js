import axios from "axios";

const instance = axios.create({
  baseURL: "https://quotes-bf578-default-rtdb.firebaseio.com/",
});

export default instance;
