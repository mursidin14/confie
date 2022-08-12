const { httpAuthClient } = require("utils/http-common");

export const getAllApplication = async() => {
  try {
    const response = await httpAuthClient.get(`/api/listjobvacancy/checkstatus`);
    return response;
  } catch (error) {
    return error;
  }
}
export const nextPage = async(page) => {
  try {
    const response = await httpAuthClient.get(`/api/listjobvacancy/checkstatus?page=${page}`);
    return response;
  } catch (error) {
    return error;
  }
}
export const prevPage = async(page) => {
  try {
    const response = await httpAuthClient.get(`/api/listjobvacancy/checkstatus?page=${page}`);
    return response;
  } catch (error) {
    return error;
  }
}
export const getDetailApplication = async(id) => {
  try {
    const response = await httpAuthClient.get(`/api/listjobvacancy/checkstatus/${id}`);
    return response.data.data;
  } catch (error) {
    return error;
  }
}
