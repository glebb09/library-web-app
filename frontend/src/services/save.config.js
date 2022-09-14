import axios from "axios";

import config from "./config";
import { LocalToken } from '../hooks/useLocalUser/useLocalUser';


export const save = (user) => {
  return axios.patch(`${config.hostUrl}/users/updateSelf`, user, {
    headers: {
      'Authorization': `Bearer ${LocalToken()}`
    }
  });
};