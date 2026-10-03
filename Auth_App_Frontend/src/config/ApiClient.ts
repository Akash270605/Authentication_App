import useAuth from "@/auth/store";
import { refreshToken } from "@/services/AuthService";
import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:8083/api/v1",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
    timeout: 10000
});

// every request
apiClient.interceptors.request.use((config) => {
    const accessToken = useAuth.getState().accessToken;
    if(accessToken){
        config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
});


let isRefreshing = false;
let pending: any = [];

function queueRequest(cb: any){
    pending.push(cb);
}

function resolveQueue(newToken: string){
    pending.forEach((cb) => cb(newToken));
    pending = [];
}

// response intercepter
apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        console.log(error);

        const is401 = error.response.status === 401;
        const original = error.config;

        console.log(original);
        console.log("Original retry: ", original._retry);

        if(!is401 || original._retry){
            return Promise.reject(error);
        }

        original._retry = true;

        // we will try to refresh token
        if(isRefreshing){
            console.log("Already refreshing...");

            return new Promise((resolveQueue, reject) => {
                queueRequest((newToken: string) => {
                    if(!newToken) return reject();
                    original.headers.Authorization = `Bearer ${newToken}`;
                    resolveQueue(apiClient(original));
                });
            });
        }

        // start refresh
        isRefreshing = true;
        try{
            console.log("Start refreshing...");

            const loginResponse = await refreshToken();
            const newToken = loginResponse.accessToken;

            if(!newToken) throw new Error("No Acess token received");
            useAuth.getState().changeLocalLoginData(loginResponse.accessToken, loginResponse.userDto, true);
            resolveQueue(newToken);
            original.headers.Authorization = `Bearer ${newToken}`;

            return apiClient(original);

        }catch(error){
            resolveQueue("null");
            useAuth.getState().logout();

            return Promise.reject(error);
        }finally{
            isRefreshing = false;
        }
    }
);

export default apiClient;