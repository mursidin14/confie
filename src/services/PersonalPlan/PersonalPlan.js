import { httpClient } from 'utils/http-common';

const getPersonalPlanData = () =>
  httpClient
    .get('/api/pdp')
    .then((response) => response)
    .catch((error) => error);

const addPersonalPlanData = (data) =>
  httpClient
    .post('/api/pdp', data)
    .then((response) => response)
    .catch((error) => error.response);

const getDetailPersonalPlanData = (id) =>
  httpClient
    .get(`/api/pdp/${id}`)
    .then((response) => response)
    .catch((error) => error);

const updatePersonalPlanData = (id, data) =>
  httpClient
    .put(`/api/pdp/${id}`, data)
    .then((response) => response)
    .catch((error) => error);

const deletePersonalPlanData = (id) =>
  httpClient.delete(`/api/pdp/${id}`).then((response) => response);

const addQuarterlyPlanData = (id, data) =>
  httpClient
    .post(`/api/pdp/${id}`, data)
    .then((response) => response)
    .catch((error) => error);

const PersonalPlanService = {
  getPersonalPlanData,
  updatePersonalPlanData,
  addPersonalPlanData,
  deletePersonalPlanData,
  getDetailPersonalPlanData,
  addQuarterlyPlanData,
};

export default PersonalPlanService;
