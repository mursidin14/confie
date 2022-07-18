import { httpAuthClient } from "utils/http-common";

export const addJobVacancy = (data) => {
  return httpAuthClient
    .post("/api/jobvacancy", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response)
    .catch((error) => error.response);
}

export const getJobVacancy = () => {
  return httpAuthClient
    .get("/api/jobvacancy")
    .then((response) => response)
    .catch((error) => error.response);
}

export const getDetailJobVacancy = (id) => {
  return httpAuthClient
    .get(`/api/jobvacancy/${id}`)
    .then((response) => response)
    .catch((error) => error.response);
}

export const deleteJobVacancy = (id) => {
  return httpAuthClient
    .delete(`/api/jobvacancy/${id}`, {
      _method: "DELETE",
    })
    .then((response) => response)
    .catch((error) => error.response);
}