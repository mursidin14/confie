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

const getOnlineProfileData = (id) =>
  httpClient
    .get(`/api/profile/${id}`)
    .then((response) => response)
    .catch((error) => error);

const addSkill = (data) =>
  httpClient
    .post('/api/profile/skills', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response)
    .catch((error) => error);

const updateSkill = (data) =>
  httpClient
    .put('/api/profile/skills', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response)
    .catch((error) => error);

const deleteSkill = (id) =>
  httpClient
    .delete(`/api/profile/skills/${id}`)
    .then((response) => response)
    .catch((error) => error);

const addJobExperience = (data) =>
  httpClient
    .post('/api/profile/experiences', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response)
    .catch((error) => error);

const updateJobExperience = (data) =>
  httpClient
    .put('/api/profile/experiences', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response)
    .catch((error) => error);

const deleteJobExperience = (id) =>
  httpClient
    .delete(`/api/profile/experiences/${id}`)
    .then((response) => response)
    .catch((error) => error);

const addIntershipExperience = (data) =>
  httpClient
    .post('/api/profile/internships', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response)
    .catch((error) => error);

const updateIntershipExperience = (data) =>
  httpClient
    .put('/api/profile/internships', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response)
    .catch((error) => error);

const deleteIntershipExperience = (id) =>
  httpClient
    .delete(`/api/profile/internships/${id}`)
    .then((response) => response)
    .catch((error) => error);

const addEducation = (data) =>
  httpClient
    .post('/api/profile/educations', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response)
    .catch((error) => error);

const updateEducation = (data) =>
  httpClient
    .put('/api/profile/educations', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response)
    .catch((error) => error);

const deleteEducation = (id) =>
  httpClient
    .delete(`/api/profile/educations/${id}`)
    .then((response) => response)
    .catch((error) => error);

const addCertificate = (data) =>
  httpClient
    .post('/api/profile/certificates', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response)
    .catch((error) => error);

const updateCertificate = (data) =>
  httpClient
    .put('/api/profile/certificates', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response)
    .catch((error) => error);

const deleteCertificate = (id) =>
  httpClient
    .delete(`/api/profile/certificates/${id}`)
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
  addSkill,
  updateSkill,
  deleteSkill,
  addJobExperience,
  updateJobExperience,
  deleteJobExperience,
  addIntershipExperience,
  updateIntershipExperience,
  deleteIntershipExperience,
  updateEducation,
  deleteEducation,
  addEducation,
  updateCertificate,
  deleteCertificate,
  LogoutProfile,
};

export default ProfileService;
