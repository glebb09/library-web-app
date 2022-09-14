import axios from "axios";

import config from "./config";

export const booksGet = () => {
  return axios.get(`${config.hostUrl}/books`);
} 
