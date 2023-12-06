import axios from "axios";
import { API_URL } from "../utils/constants";

let _App_Apis = {
  getUsers: async () => {
    try {
      let { data } = await axios.get(`${API_URL}/users/info`);
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default _App_Apis;