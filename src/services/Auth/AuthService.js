import loginClient, {
  httpAuthClient,
  httpClient,
  registerClient,
} from 'utils/http-common';

const login = (data) =>
  loginClient.get('/sanctum/csrf-cookie').then((response) =>
    loginClient
      .post('/api/login', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        if (response.data.meta.access_token) {
          localStorage.setItem('user', JSON.stringify(response.data.data));
          localStorage.setItem('metadata', JSON.stringify(response.data.meta));
        }
        return response;
      })
      .catch((error) => {
        return error.response;
      }),
  );

const register = (url, data) =>
  registerClient.get('/sanctum/csrf-cookie').then((response) =>
    registerClient
      .post(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err.response;
      }),
  );

const forgetPassword = (data) => {
  return httpClient
    .post('/api/forgot-password', data)
    .then((response) => response)
    .catch((error) => error.response);
};

const getListSkill = () => {
  return httpClient
    .get('/api/listskill')
    .then((response) => response)
    .catch((error) => error.response);
};

const getListField = () => {
  return httpClient
    .get('/api/listbusinessfield')
    .then((response) => response)
    .catch((error) => error.response);
};

const logout = () =>
  httpAuthClient
    .post('/api/logout')
    .then((response) => {
      localStorage.removeItem('metadata');
      localStorage.removeItem('user');
      localStorage.removeItem('userComplete');
      return response;
    })
    .catch((error) => {
      return error.response;
    });

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};
export const getCurrentUserComplete = () => {
  return JSON.parse(localStorage.getItem('userComplete'));
};

const getMetadata = () => {
  return JSON.parse(localStorage.getItem('metadata'));
};

const getToken = () => {
	  let metadata = JSON.parse(localStorage.getItem('metadata'));
	  return metadata?.access_token;
}

const setMetadata = (meta) => {
	  localStorage.setItem('metadata', JSON.stringify(meta));
}

const isAuthenticated = () => {
	  return getToken() ? true : false;
}

const isAdmin = () => {
	  let currentUser = getCurrentUser();
	  return currentUser?.role === 'internal';
}

const isUser = (user) => {
	  let currentUser = getCurrentUser();
	  return currentUser?.role === user;
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
  setMetadata,
  getToken,
  isAuthenticated,
  isAdmin,
  isUser,
};

export default AuthService;
