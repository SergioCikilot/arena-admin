import axios from "axios";
import * as consts from "../utils/consts.js";

const baseUrl = "https://arenahalisaha.azurewebsites.net";

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
  return axios.post(
    baseUrl + "/user/getUserIdByUsername",
    {
      username: username,
    },
    { Authorization: auth }
  );
}
