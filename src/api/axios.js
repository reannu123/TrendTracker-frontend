import axios from "axios";

const instance = axios.create({
  baseURL: "http://188.166.228.122:5000",
});

const auth = axios.create({
  baseURL: "http://188.166.228.122:5000",
});

export { instance, auth };
