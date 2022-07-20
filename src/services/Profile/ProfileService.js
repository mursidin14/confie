import { httpAuthClient } from 'utils/http-common';

export const sendEmailVefification = () =>
  httpAuthClient
    .post('/api/email/verify/resend')
    .then((response) => response)
    .catch((error) => error.response);

const getProfileData = async () => {
  try {
    const response = await httpAuthClient.get('/api/profile');
    return response;
  } catch (error) {
    return error.response;
  }
};

const updateProfileData = (data) =>
  httpAuthClient
    .put('/api/profile', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response)
    .catch((error) => error.response);

const updateAbout = (data) =>
  httpAuthClient
    .put('/api/profile/about', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response)
    .catch((error) => error.response);

export const updateCompanyInformation = (data) =>
  httpAuthClient
    .put('/api/profile/information', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response)
    .catch((error) => error.response);

export const updateGallery = (data) =>
  httpAuthClient
    .put('/api/profile/galleries', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => response)
    .catch((error) => error.response);

export const deleteGallery = (id) =>
  httpAuthClient
    .delete(`/api/profile/galleries/${id}`)
    .then((response) => response)
    .catch((error) => error.response);

export const updateBannerCompany = (data) =>
  httpAuthClient
    .post('/api/profile/banner', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'multipart/form-data',
      },
    })
    .then((response) => response)
    .catch((error) => error.response);

export const deleteBannerCompany = () =>
  httpAuthClient
    .delete('/api/profile/banner')
    .then((response) => response)
    .catch((error) => error.response);

const updateProfilePicture = (data) =>
  httpAuthClient
    .post('/api/profile/photo', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'multipart/form-data',
      },
    })
    .then((response) => response)
    .catch((error) => error.response);

const deletePhotoProfile = () =>
  httpAuthClient
    .delete('/api/profile/photo')
    .then((response) => response)
    .catch((error) => error.response);

const updateSettingProfile = (data) =>
  httpAuthClient
    .put('/api/profile/account', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response)
    .catch((error) => error.response);

const getOnlineProfileData = (id) =>
  httpAuthClient
    .get(`/api/profile/${id}`)
    .then((response) => response)
    .catch((error) => error);

const addSkill = (data) =>
  httpAuthClient
    .post('/api/profile/skills', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response)
    .catch((error) => error.response);

const updateSkill = (data) =>
  httpAuthClient
    .put('/api/profile/skills', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response)
    .catch((error) => error);

const deleteSkill = (id) =>
  httpAuthClient
    .delete(`/api/profile/skills/${id}`)
    .then((response) => response)
    .catch((error) => error);

const addJobExperience = (data) =>
  httpAuthClient
    .post('/api/profile/experiences', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'multipart/form-data',
      },
    })
    .then((response) => response)
    .catch((error) => error.response);

const updateJobExperience = (id, data) =>
  httpAuthClient
    .put(`/api/profile/experiences/${id}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'multipart/form-data',
      },
    })
    .then((response) => response)
    .catch((error) => error.response);

const deleteJobExperience = (id) =>
  httpAuthClient
    .delete(`/api/profile/experiences/${id}`)
    .then((response) => response)
    .catch((error) => error.response);

const addIntershipExperience = (data) =>
  httpAuthClient
    .post('/api/profile/internships', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'multipart/form-data',
      },
    })
    .then((response) => response)
    .catch((error) => error.response);

const updateIntershipExperience = (id, data) =>
  httpAuthClient
    .put(`/api/profile/internships/${id}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'multipart/form-data',
      },
    })
    .then((response) => response)
    .catch((error) => error.response);

const deleteIntershipExperience = (id) =>
  httpAuthClient
    .delete(`/api/profile/internships/${id}`)
    .then((response) => response)
    .catch((error) => error.response);

const addEducation = (data) =>
  httpAuthClient
    .post('/api/profile/educations', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'multipart/form-data',
      },
    })
    .then((response) => response)
    .catch((error) => error.response);

const updateEducation = (id, data) =>
  httpAuthClient
    .put(`/api/profile/educations/${id}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'multipart/form-data',
      },
    })
    .then((response) => response)
    .catch((error) => error.response);

const deleteEducation = (id) =>
  httpAuthClient
    .delete(`/api/profile/educations/${id}`)
    .then((response) => response)
    .catch((error) => error.response);

const addOrganization = (data) =>
  httpAuthClient
    .post('/api/profile/volunteers', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'multipart/form-data',
      },
    })
    .then((response) => response)
    .catch((error) => error.response);

const updateOrganization = (id, data) =>
  httpAuthClient
    .put(`/api/profile/volunteers/${id}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'multipart/form-data',
      },
    })
    .then((response) => response)
    .catch((error) => error.response);

const deleteOrganization = (id) =>
  httpAuthClient
    .delete(`/api/profile/volunteers/${id}`)
    .then((response) => response)
    .catch((error) => error.response);

const addCertificate = (data) =>
  httpAuthClient
    .post('/api/profile/certificates', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'multipart/form-data',
      },
    })
    .then((response) => response)
    .catch((error) => error.response);

const updateCertificate = (id, data) =>
  httpAuthClient
    .put(`/api/profile/certificates/${id}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'multipart/form-data',
      },
    })
    .then((response) => response)
    .catch((error) => error.response);

const deleteCertificate = (id) =>
  httpAuthClient
    .delete(`/api/profile/certificates/${id}`)
    .then((response) => response)
    .catch((error) => error.response);

const addPublication = (data) => {
  return httpAuthClient
    .post('/api/profile/papers', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => response)
    .catch((error) => error.response);
};

const updatePublication = (id, data) => {
  return httpAuthClient
    .post(`/api/profile/papers/${id}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => response)
    .catch((error) => error.response);
};

const deletePublication = (id) => {
  return httpAuthClient
    .delete(`/api/profile/papers/${id}`)
    .then((response) => response)
    .catch((error) => error.response);
};

const LogoutProfile = () =>
  httpAuthClient
    .post('/api/logout')
    .then((response) => response)
    .catch((error) => error);

const ProfileService = {
  getProfileData,
  updateProfilePicture,
  deletePhotoProfile,
  updateProfileData,
  updateSettingProfile,
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
  addOrganization,
  updateOrganization,
  deleteOrganization,
  addCertificate,
  updateCertificate,
  deleteCertificate,
  addPublication,
  updatePublication,
  deletePublication,
  LogoutProfile,
};

export default ProfileService;
