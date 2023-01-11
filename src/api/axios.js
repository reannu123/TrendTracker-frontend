import axios from "axios";

const instance = axios.create({
  baseURL: "http://188.166.228.122",
});

const auth = axios.create({
  baseURL: "http://188.166.228.122",
});

export { instance, auth };
