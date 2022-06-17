import { httpClient } from 'utils/http-common';

const getDashboardData = () =>
  httpClient
    .get('/api/dashboard')
    .then((response) => response)
    .catch((error) => error);

const DashboardService = {
  getDashboardData,
};

export default DashboardService;
