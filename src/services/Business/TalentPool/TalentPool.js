import { httpAuthClient } from 'utils/http-common';

export const getAllTalentPool = async () => {
  try {
    const response = await httpAuthClient.get('/api/talents');
    return response.data.data.data
  } catch (error) {
    return error.response;
  }
};

export const getFilteredTalentPool = async (filter) => {
  try {
    const response = await httpAuthClient.get(`/api/talents${filter}`);
    return response.data.data.data
  } catch (error) {
    return error.response;
  }
}
