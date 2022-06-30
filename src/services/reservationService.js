import axios from "axios";

export function getReservations(auth,id) {
    return axios.get(
      "https://arenahalisaha.azurewebsites.net/reservation/getAllReservationsByPitchId?id=" + id,
      { headers: { Authorization: auth } }
    );
  }

  export function addReservation(auth,body){

    return axios.post(
        "https://arenahalisaha.azurewebsites.net/reservation/addReservation",body,
        { headers: { Authorization: auth } }
      );

  }
