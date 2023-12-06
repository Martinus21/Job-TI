import axios from "axios";

export const API_URL = "https://api.kontenbase.com/query/api/v1";
// export const API_URL = "https://50b3-180-242-71-61.ngrok-free.app/api/v1/";
// Membuat instance Axios

// Menambahkan interceptor untuk mengatur token otentikasi
axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

