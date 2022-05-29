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
    .catch((error) => error);

const getDetailPersonalPlanData = (id) =>
  httpClient
    .get(`/api/pdp/${id}`)
    .then((response) => response)
    .catch((error) => error);

const addQuarterlyPlanData = (id, data) =>
  httpClient
    .post(`/api/pdp/${id}`, data)
    .then((response) => response)
    .catch((error) => error);

const PersonalPlanService = {
  getPersonalPlanData,
  addPersonalPlanData,
  getDetailPersonalPlanData,
  addQuarterlyPlanData,
};

export default PersonalPlanService;
