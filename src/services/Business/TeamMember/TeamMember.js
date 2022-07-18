import { httpAuthClient } from "utils/http-common";

export const getTeamMember = () => {
  return httpAuthClient
    .get("/api/members")
    .then((response) => response)
    .catch((error) => error.response);
}

export const getTeamMemberDetail = (id) => {
  return httpAuthClient
    .get(`/api/members/${id}`)
    .then((response) => response)
    .catch((error) => error.response);
}

export const addTeamMember = (data) => {
  return httpAuthClient
    .post("/api/members", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response)
    .catch((error) => error.response);
}

export const updateTeamMember = (id, data) => {
  return httpAuthClient
    .put(`/api/members/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response)
    .catch((error) => error.response);
}

export const deleteTeamMember = (id) => {
  return httpAuthClient
    .delete(`/api/members/${id}`)
    .then((response) => response)
    .catch((error) => error.response);
}

export const invitationMember = (data) => {
  return httpAuthClient
    .post("/api/members/invitations", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response)
    .catch((error) => error.response);
}