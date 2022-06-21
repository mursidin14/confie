import { httpAuthClient } from 'utils/http-common';

const getDashboardData = () =>
  httpAuthClient
    .get('/api/dashboard')
    .then((response) => response)
    .catch((error) => error);

const DashboardService = {
  getDashboardData,
};

export default DashboardService;
