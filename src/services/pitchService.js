import axios from "axios";
import { baseUrl } from "../utils/consts";

export default class PitchService {
  //constructor(){
  addPitch(
    pitchName,
    pitchPrice,
    pitchOpeningTime,
    pitchClosingTime,
    pitchMatchDuration,
    pitchAddress,
    pitchIsIllumination,
    pitchIsCamera
  ) {
    let pitchData = {
      pitchName,
      pitchPrice,
      pitchOpeningTime,
      pitchClosingTime,
      pitchMatchDuration,
      pitchAddress,
      pitchIsIllumination,
      pitchIsCamera,
    };

    return axios.post(
      "http://localhost:8080/pitch/addPitch?" +
        "pitchName=" +
        pitchName +
        "&pitchPrice=" +
        pitchPrice +
        "&pitchOpeningTime=" +
        pitchOpeningTime +
        "&pitchClosingTime=" +
        pitchClosingTime +
        "&pitchMatchDuration=" +
        pitchMatchDuration +
        "&pitchAddress=" +
        pitchAddress +
        "&pitchIsIllumination=" +
        pitchIsIllumination +
        "&pitchIsCamera=" +
        pitchIsCamera
      // {
      //     headers: {
      //         'Content-Type': 'application/json',
      //         'Authorization': 'JWT fefege...'
      //     }

      // }
    );
  }

  getAllPitches() {
    return axios.get("http://localhost:8080/pitch/getAllPitches");
  }
}
export function getPitchByPitchId(auth, id) {
  return axios.get(baseUrl + "/pitch/getPitchById", {
    params: { id: id },

    headers: { Authorization: auth },
  });
}

export function getPitchesByUserId(auth, id) {
  return axios.get(baseUrl + "/pitch/getPitchesByUserPitchUserId", {
    params: { id: id },
    headers: { Authorization: auth },
  });
}
