import axios from "axios";

const loginClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
});

export const registerClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const httpClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default loginClient;
