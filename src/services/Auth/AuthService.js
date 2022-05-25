import loginClient from 'utils/http-common';

const login = (data) =>
  loginClient.get('/sanctum/csrf-cookie').then((response) =>
    loginClient.post('/api/login', data, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
  );


const AuthService = {
  login,
};

export default AuthService;
