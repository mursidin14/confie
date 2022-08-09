import ModalError from "components/Modal/ModalError";
import React from "react";
import {
  useNavigate
} from 'react-router-dom';
import AuthService from "services/Auth/AuthService";

function PrivateRoute({ children, role, ...rest }) {
	let navigate = useNavigate(); 
	let currentUser = AuthService.getCurrentUser();
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
	if (currentUser?.roles[0].name !== role) {
		return (
			<ModalError
				title="Not authorized"
				error={true}
				error_msg={["You are not authorized to access this page"]}
				closeModal={() => {
					navigate("/");
				}}
			></ModalError>
		)
	}
	return children
}

export default PrivateRoute;