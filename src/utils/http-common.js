import axios from "axios";
import { authHeader } from 'utils/utils';

const loginClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
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

export const httpAuthClient = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: authHeader(),
});

export default loginClient;
