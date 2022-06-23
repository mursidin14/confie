import { httpAuthClient } from 'utils/http-common';

const getPersonalPlanData = () =>
  httpAuthClient
    .get('/api/pdp')
    .then((response) => response)
    .catch((error) => error);

const addPersonalPlanData = (data) =>
  httpAuthClient
    .post('/api/pdp', data)
    .then((response) => response)
    .catch((error) => error.response);

const getDetailPersonalPlanData = (id) =>
  httpAuthClient
    .get(`/api/pdp/${id}`)
    .then((response) => response)
    .catch((error) => error);

const updatePersonalPlanData = (id, data) =>
  httpAuthClient
    .put(`/api/pdp/${id}`, data)
    .then((response) => response)
    .catch((error) => error);

const deletePersonalPlanData = (id) =>
  httpAuthClient.delete(`/api/pdp/${id}`).then((response) => response).catch((error) => error.response);

const addQuarterlyPlanData = (id, data) =>
  httpAuthClient
    .post(`/api/pdp/${id}`, data)
    .then((response) => response)
    .catch((error) => error);

const updateQuarterlyPlanData = (id, data) =>
  httpAuthClient
    .put(`/api/pdp/milestone/${id}`, data)
    .then((response) => response)
    .catch((error) => error);

const deleteQuarterlyPlanData = (id) =>
  httpAuthClient.delete(`/api/pdp/milestone/${id}`).then((response) => response).catch((error) => error.response);

const PersonalPlanService = {
  getPersonalPlanData,
  updatePersonalPlanData,
  addPersonalPlanData,
  deletePersonalPlanData,
  getDetailPersonalPlanData,
  addQuarterlyPlanData,
  updateQuarterlyPlanData,
  deleteQuarterlyPlanData,
};

export default PersonalPlanService;
