import loginClient, { httpClient, registerClient } from 'utils/http-common';

const login = (data) =>
  loginClient.get('/sanctum/csrf-cookie').then((response) =>
    loginClient.post('/api/login', data, {
        headers: {
          'Content-Type': 'application/json', 
        },
      })
      .then((response) => {
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

  const getListSkill = () => {
    return httpClient
      .get('/api/listskill')
      .then((response) => response)
      .catch((error) => error.response);
  }

  const logout = () =>
  loginClient.post('/api/logout').then((response) => {
    return response;
  });
      



const AuthService = {
  login,
  register,
  getListSkill,
  logout,
};

export default AuthService;
