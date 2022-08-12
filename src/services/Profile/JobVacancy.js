import { httpAuthClient } from 'utils/http-common';

export const getAllJobVacancy = () => {
  return httpAuthClient
    .get(`/api/listjobvacancy`)
    .then((response) => response)
    .catch((error) => error.response);
};

export const nextPageJobVacancy = (page) => {
  return httpAuthClient
    .get(`/api/listjobvacancy?page=${page}`)
    .then((response) => response)
    .catch((error) => error.response);
}

export const previousPageJobVacancy = (page) => {
  return httpAuthClient
    .get(`/api/listjobvacancy?page=${page}`)
    .then((response) => response)
    .catch((error) => error.response);
}

export const getFilteredJobVacancy = (filterItem ) => {
  return httpAuthClient
    .get(`/api/listjobvacancy${filterItem}`)
    .then((response) => response)
    .catch((error) => error.response);
};

export const getJobVacancyDetail = (id) => {
  return httpAuthClient
    .get(`/api/listjobvacancy/${id}`)
    .then((response) => response)
    .catch((error) => error.response);
};

export const applyJobVacancy = (id, data) => {
  return httpAuthClient
    .post(`/api/listjobvacancy/applyjob/${id}`, data)
    .then((response) => response)
    .catch((error) => error.response);
}

export const getJobVacancyStatus = () => {
  return httpAuthClient
    .get(`/api/listjobvacancy/checkstatus?`)
    .then((response) => response)
    .catch((error) => error.response);
}

export const getJobVacancyStatusDetail = (id) => {
  return httpAuthClient
    .get(`/api/listjobvacancy/checkstatus/${id}`)
    .then((response) => response)
    .catch((error) => error.response);
}

export const getPublicJobVacancy = (id) => {
  return httpAuthClient
    .get(`/api/public-jobvacancy/${id}`)
    .then((response) => response)
    .catch((error) => error.response);
}