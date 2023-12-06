import axios from "axios";
import { API_URL } from "../utils/constants";

let _App_Apis = {
    exprience: async ({ params, headers }) => {
        try {
            let { data } = await axios.get(`${API_URL}/a8d5ee26-bdb1-4668-815c-53178086e682/exprience`, {
                params,
                headers: {
                    ...headers,
                    "Content-Type": "application/json"
                }
            });
            return data;
        } catch (error) {
            throw error;
        }
    },

    sendExprience: async ({ body, headers }) => {
        try {
            let { data } = await axios.post(`${API_URL}/a8d5ee26-bdb1-4668-815c-53178086e682/exprience`, body, {
                headers: {
                    ...headers,
                    "Content-Type": "application/json"
                }
            });
            return data;
        } catch (error) {
            throw error;
        }
    }
}

export default _App_Apis;