const { httpAuthClient } = require('utils/http-common');

export const getMapCareer = async () => {
  try {
    const response = await httpAuthClient.get('/api/carriermap');
    return response.data;
  } catch (error) {
    return error;
  }
};
