import axios from "axios";
import { API_URL } from "../utils/constants";

let _App_Apis = {
  jobs: async ({params,headers}) => {
    try {
      let { data } = await axios.get(`${API_URL}/a8d5ee26-bdb1-4668-815c-53178086e682/jobs`,{
          params,
          headers:{
            ...headers,
            "Content-Type":"application/json"
          }
      });
      return data;
    } catch (error) {
      throw error;
    }
  },

  applyJobs:async({body,headers})=>{
    try {
      let { data } = await axios.post(`${API_URL}/a8d5ee26-bdb1-4668-815c-53178086e682/applyJobs`,body,{
          headers:{
            ...headers,
            'Content-Type': 'multipart/form-data'
          }
      });
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default _App_Apis;