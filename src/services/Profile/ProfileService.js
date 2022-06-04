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

const updateAbout = (data) => 
  httpClient
    .put('/api/about', data, {
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
    .catch((error) => error.response);

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
    .catch((error) => error.response);

const updateJobExperience = (data) =>
  httpClient
    .put('/api/profile/experiences', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response)
    .catch((error) => error.response);

const deleteJobExperience = (id) =>
  httpClient
    .delete(`/api/profile/experiences/${id}`)
    .then((response) => response)
    .catch((error) => error.response);

const addIntershipExperience = (data) =>
  httpClient
    .post('/api/profile/internships', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response)
    .catch((error) => error.response);

const updateIntershipExperience = (data) =>
  httpClient
    .put('/api/profile/internships', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response)
    .catch((error) => error.response);

const deleteIntershipExperience = (id) =>
  httpClient
    .delete(`/api/profile/internships/${id}`)
    .then((response) => response)
    .catch((error) => error.response);

const addEducation = (data) =>
  httpClient
    .post('/api/profile/educations', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response)
    .catch((error) => error.response);

const updateEducation = (data) =>
  httpClient
    .put('/api/profile/educations', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response)
    .catch((error) => error.response);

const deleteEducation = (id) =>
  httpClient
    .delete(`/api/profile/educations/${id}`)
    .then((response) => response)
    .catch((error) => error.response);

const addCertificate = (data) =>
  httpClient
    .post('/api/profile/certificates', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response)
    .catch((error) => error.response);

const updateCertificate = (data) =>
  httpClient
    .put('/api/profile/certificates', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response)
    .catch((error) => error.response);

const deleteCertificate = (id) =>
  httpClient
    .delete(`/api/profile/certificates/${id}`)
    .then((response) => response)
    .catch((error) => error.response);

const LogoutProfile = () =>
  httpClient
    .post('/api/logout')
    .then((response) => response)
    .catch((error) => error);

const ProfileService = {
  getProfileData,
  updateProfileData,
  updateAbout,
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
  addEducation,
  updateEducation,
  deleteEducation,
  addCertificate,
  updateCertificate,
  deleteCertificate,
  LogoutProfile,
};

export default ProfileService;
