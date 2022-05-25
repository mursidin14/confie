import loginClient, {registerClient} from 'utils/http-common';

const login = (data) =>
  loginClient.get('/sanctum/csrf-cookie').then((response) =>
    loginClient.post('/api/login', data, {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => {
        return response;
    }).catch((error) => {
        return error;
    })
);

const register = (data) => {
  registerClient.get('/sanctum/csrf-cookie').then((response) =>
    registerClient.post('/api/register', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  );
}



const AuthService = {
  login,
  register,
};

export default AuthService;
