import { httpAuthClient } from 'utils/http-common';

export const getAllJobVacancy = () => {
  return httpAuthClient
    .get(`/api/listjobvacancy`)
    .then((response) => response)
    .catch((error) => error.response);
};

export const getFilteredJobVacancy = ({ position }) => {
  return httpAuthClient
    .get(`/api/listjobvacancy?title=${position}`)
    .then((response) => response)
    .catch((error) => error.response);
};

export const getJobVacancyDetail = (id) => {
  return httpAuthClient
    .get(`/api/listjobvacancy/${id}`)
    .then((response) => response)
    .catch((error) => error.response);
};

export const applyJobVacancy = (id) => {
  return httpAuthClient
    .post(`/api/listjobvacancy/applyjob/${id}`)
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
