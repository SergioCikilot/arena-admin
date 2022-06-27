import axios from "axios";
import * as consts from "../utils/consts.js";

export function Login(username, password) {
  let loginDdata = {
    username,
    password,
  };

  return axios.post(
    "https://arenahalisaha.azurewebsites.net" + "/login",
    {
      username: username,
      password: password,
    },
    { "Access-Control-Allow-Origin": "*" }
  );
}

export function getAllPitches(auth) {
  return axios.get(
    "https://arenahalisaha.azurewebsites.net/pitch/getAllPitches",
    { headers: { Authorization: auth } }
  );
}
