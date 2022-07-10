import axios from "axios";
import { baseUrl } from "../utils/consts";
export function Login(username, password) {
  return axios.post(
    baseUrl + "/login",
    {
      username: username,
      password: password,
    },
    { "Access-Control-Allow-Origin": "*" }
  );
}

export function getAllPitches(auth) {
  return axios.get(baseUrl + "/pitch/getAllPitches", {
    headers: { Authorization: auth },
  });
}

export function getUserIdByUsername(auth, username) {
  return axios.get(baseUrl + "/user/getUserIdByUsername", {
    params: { username: username },

    headers: { Authorization: auth },
  });
}

export function getUserbyUsername(auth, username) {
  return axios.get(baseUrl + "/user/getUserByUsername", {
    params: { username: username },

    headers: { Authorization: auth },
  });
}
