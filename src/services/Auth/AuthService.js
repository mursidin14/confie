import loginClient, { httpAuthClient, httpClient, registerClient } from 'utils/http-common';

const login = (data) =>
  loginClient.get('/sanctum/csrf-cookie').then((response) =>
    loginClient.post('/api/login', data, {
        headers: {
          'Content-Type': 'application/json', 
        },
      })
      .then((response) => {
		if (response.data.meta.access_token) {
			localStorage.setItem("user", JSON.stringify(response.data.data));
			localStorage.setItem("metadata", JSON.stringify(response.data.meta));
		}
        return response;
      })
      .catch((error) => {
        return error.response;
      })
  );

const register = (data) =>
  registerClient.get('/sanctum/csrf-cookie').then((response) =>
    registerClient
      .post('/api/register', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err.response;
      })
  );
  
  const forgetPassword = (data) => {
    return httpClient
      .post('/api/forgot-password', data)
      .then((response) => response)
      .catch((error) => error.response);
  }

  const getListSkill = () => {
    return httpClient
      .get('/api/listskill')
      .then((response) => response)
      .catch((error) => error.response);
  }
  
  const getListField = () => {
    return httpClient
      .get('/api/listbusinessfield')
      .then((response) => response)
      .catch((error) => error.response);
  }
  
  
    

  const logout = () =>
  httpAuthClient.post('/api/logout').then((response) => {
    localStorage.removeItem("metadata");
    return response;
  }).catch((error) => {
    return error.response;
  });

  export const getCurrentUser = () => {
	return JSON.parse(localStorage.getItem("user")) ;
  };

  const getMetadata = () => {
	return localStorage.getItem("metadata") ;
  }
      


const AuthService = {
  login,
  register,
  forgetPassword,
  getListSkill,
  getListField,
  logout,
  getCurrentUser,
  getMetadata,
};

export default AuthService;
