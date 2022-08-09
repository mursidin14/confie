import React from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "./AuthService";

function Authenticate() {
	const navigate = useNavigate();
	const currentUser = AuthService.getCurrentUser();
	const isAuthenticated = AuthService.isAuthenticated();
	React.useEffect(()=> {
		if (!isAuthenticated) {
			// if current route is not login, redirect to login page
			if (window.location.pathname !== "/login") {
				navigate("/login");
			}
		} else {
			switch (currentUser?.roles[0].name) {
				case 'internal':
					navigate('/admin');
					break;
				case 'personal':
					navigate('/dashboard');
					break;
				case 'business':
					navigate('/business');
					break;
				default:
					AuthService.logout();
					break;
			}
		}
	})
}

const Gate = {
	Authenticate
}

export default Gate;
