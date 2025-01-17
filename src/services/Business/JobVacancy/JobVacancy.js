import { httpAuthClient } from 'utils/http-common';

export const addJobVacancy = (data) => {
  return httpAuthClient
    .post('/api/jobvacancy', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response)
    .catch((error) => error.response);
};

export const updateJobVacancy = (id, data) => {
  return httpAuthClient
    .put(`/api/jobvacancy/${id}?_method=PUT`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response)
    .catch((error) => error.response);
};

export const getJobVacancy = () => {
  return httpAuthClient
    .get('/api/jobvacancy')
    .then((response) => response)
    .catch((error) => error.response);
};

export const getDetailJobVacancy = (id) => {
  return httpAuthClient
    .get(`/api/jobvacancy/${id}`)
    .then((response) => response)
    .catch((error) => error.response);
};

export const changeArchiveJobVacany = (id, isPublish) => {
  return httpAuthClient
    .post(
      `/api/jobvacancy/${id}?_method=PUT`,
      {
        is_publish: isPublish,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    .then((response) => response)
    .catch((error) => error.response);
};

export const getApplicantJobVacancy = (id) => {
  return httpAuthClient
    .get(`/api/jobvacancy/${id}/participant`)
    .then((response) => response)
    .catch((error) => error.response);
};

export const changeApplicantJobVacancy = (idJob, idApplicant, status) => {
  return httpAuthClient
    .post(`/api/jobvacancy/${idJob}/participant/${idApplicant}`, {
      status,
    })
    .then((response) => response)
    .catch((error) => error.response);
};

export const rejectApplicant = (idJob, idApplicant) => {
  return httpAuthClient
    .post(`/api/jobvacancy/${idJob}/participant/reject/${idApplicant}`, {
      is_reject: 1,
    })
    .then((response) => response)
    .catch((error) => error.response);
};

export const changeTimeInterview = (idJob, idApplicant, data) => {
  return httpAuthClient
    .post(`/api/jobvacancy/${idJob}/participant/interview/${idApplicant}`, data)
    .then((response) => response)
    .catch((error) => error.response);
};

export const deleteJobVacancy = (id) => {
  return httpAuthClient
    .delete(`/api/jobvacancy/${id}`, {
      _method: 'DELETE',
    })
    .then((response) => response)
    .catch((error) => error.response);
};
