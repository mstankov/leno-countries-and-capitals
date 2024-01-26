import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_ENDPOINT;
axios.defaults.headers.common[
  "Authorization"
] = `Bearer c4caaefe5fa7dc03456136d044ab89555941a2`; // TODO: Replace with private ENV

export default axios;
