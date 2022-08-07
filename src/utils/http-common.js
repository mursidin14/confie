import axios from "axios";
import ErrorModal from "components/Widgets/ErrorModal";
import { Navigate } from "react-router-dom";
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

httpAuthClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
	Navigate("/login");
    if (error.response.status === 401) {
      localStorage.removeItem("user");
      localStorage.removeItem("userComplete");
	  localStorage.removeItem("metadata");

    }
	console.log(error.response);
    // return ErrorModal
	return (
		<ErrorModal
			error_msg={[error.response.data.message]}
			isOpen={true}
			// close modal return to login page
			closeModal={() => {
				Navigate("/login");
			}}
		></ErrorModal>
	)
  }
);

export default loginClient;
