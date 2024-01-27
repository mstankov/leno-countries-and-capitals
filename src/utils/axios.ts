import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_ENDPOINT;
axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`; // TODO: Replace with private ENV

export default axios;
