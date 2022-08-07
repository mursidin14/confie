import ModalError from "components/Modal/ModalError";
import React from "react";
import {
  useNavigate
} from 'react-router-dom';
import AuthService from "services/Auth/AuthService";

function ProtectedRoute({ children, ...rest }) {
	let navigate = useNavigate(); 
	let isAuthenticated = AuthService.isAuthenticated();

	if (!isAuthenticated) {
		return (
			<ModalError
				title="Not authenticated"
				error={true}
				error_msg={["You are not logged in. Please login to continue"]}
				closeModal={() => {
					navigate("/login");
				}}
			></ModalError>
		)
	}

	return children
}

export default ProtectedRoute;