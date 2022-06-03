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

const getSkill = () =>
  httpClient
    .get('/api/profile/skills')
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

const getJobExpreience = () =>
  httpClient
    .get('/api/profile/experiences')
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

const getIntershipExperience = () =>
  httpClient
    .get('/api/profile/internships')
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

const getEducation = () =>
  httpClient
    .get('/api/profile/educations')
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

const getCertificate = () =>
  httpClient
    .get('/api/profile/certificates')
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
  getSkill,
  updateSkill,
  deleteSkill,
  getJobExpreience,
  updateJobExperience,
  deleteJobExperience,
  getIntershipExperience,
  updateIntershipExperience,
  deleteIntershipExperience,
  getEducation,
  updateEducation,
  deleteEducation,
  getCertificate,
  updateCertificate,
  deleteCertificate,
  LogoutProfile,
};

export default ProfileService;
