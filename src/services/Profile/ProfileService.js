import { httpClient } from 'utils/http-common';

const getProfileData = () =>
  httpClient
    .get('/api/profile')
    .then((response) => response)
    .catch((error) => error);

const getOnlineProfileData = () =>
  httpClient
    .get('/api/onlineprofile')
    .then((response) => response)
    .catch((error) => error);

const ProfileService = {
    getProfileData,
    getOnlineProfileData
};

export default ProfileService;
