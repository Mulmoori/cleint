import axios from "axios";
import Cookies from "js-cookie";

const { VITE_APP_SERVER_PORT } = import.meta.env;

const accessToken = "eyJKV1QiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJhaWQiOiJlM2Q1NmEyNS04ZWI5LTQ5NjktOTMyNi0wNmQ1MDMyOGJjNmUiLCJyb2wiOiJVU0VSIiwiaWF0IjoxNzI0MDkxODk4LCJleHAiOjE3MjUzMDE0OTh9.5xXb3jl0_mSk3Yi23mQEXSGZlDMWV5GemXXvIw-8yP1j65vMsoTbJjKfn3Oovmgx73nkG3OIpipTeqjvaYe-dQ";


const instance = axios.create({
    baseURL: VITE_APP_SERVER_PORT,

    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`,
    },
});

instance.interceptors.request.use((config) => {
        const accessToken = Cookies.get('accessToken');
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
            config.withCredentials = true;
        }

        return config;
    }, (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    response => response,
    async (error) => {
        if (error.response && error.response.status === 401) {
            const originalRequest = error.config;
            if (!originalRequest._retry) {
                originalRequest._retry = true;

                try {
                    // 토큰 재발급 요청
                    const response = await axios.post(`${import.meta.env.VITE_APP_SERVER_URL}/api/v1/auth/reissue/token`, {}, {
                        withCredentials: true,
                    });

                    if (response.status === 200) {
                        const accessToken = Cookies.get('accessToken');
                        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
                        return instance(originalRequest);
                    }
                } catch (refreshError) {
                    return Promise.reject(refreshError);
                }
            }
        }

        return Promise.reject(error);
    }
);

export default instance;

