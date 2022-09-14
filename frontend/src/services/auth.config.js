import axios from "axios";

import config from "./config";

export const registration = (user) => {
  return axios.post(`${config.hostUrl}/users`, user);
    
}

export const login = (user) => {
  return axios.post(`${config.hostUrl}/users/login`, user);
}
