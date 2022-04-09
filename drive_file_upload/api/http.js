import axios from "axios";
import "dotenv/config";
// const BASE_URL = proccess.env.VUE_APP_API_BASE_URL;

const BASE_URL = "http://localhost:3030";

const http = axios.create({
  baseURL: BASE_URL,
});

export default http;
