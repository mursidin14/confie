import { httpClient } from 'utils/http-common';

const getProfileData = () =>
  httpClient
    .get('/api/profile')
    .then((response) => response)
    .catch((error) => error.response);

const updateProfileData = (data) =>
  httpClient
    .put('/api/profile', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response)
    .catch((error) => error.response);

const getOnlineProfileData = () =>
  httpClient
    .get('/api/onlineprofile')
    .then((response) => response)
    .catch((error) => error);

const LogoutProfile = () =>
  httpClient
    .post('/api/logout')
    .then((response) => response)
    .catch((error) => error);

const ProfileService = {
  getProfileData,
  updateProfileData,
  getOnlineProfileData,
  LogoutProfile,
};

export default ProfileService;
