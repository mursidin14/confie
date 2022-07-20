import { httpAuthClient } from 'utils/http-common';

const getDashboardData = async () => {
  try {
    const response = await httpAuthClient.get('/api/dashboard');
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const getSliderInformation = () => {
  return httpAuthClient
    .get('/api/slidinginformation')
    .then((response) => response)
    .catch((error) => error);
};
const DashboardService = {
  getDashboardData,
};

export default DashboardService;
