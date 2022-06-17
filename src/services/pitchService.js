import axios from "axios";

export default class PitchService{

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
        ){
            
            let pitchData = {
                pitchName,
                pitchPrice,
                pitchOpeningTime,
                pitchClosingTime,
                pitchMatchDuration,
                pitchAddress,
                pitchIsIllumination,
                pitchIsCamera}

                
        return axios.post(
            "http://localhost:8080/pitch/addPitch?" + 
            "pitchName=" + pitchName +
            "&pitchPrice=" + pitchPrice +
            "&pitchOpeningTime=" + pitchOpeningTime +
            "&pitchClosingTime=" + pitchClosingTime +
            "&pitchMatchDuration=" + pitchMatchDuration +
            "&pitchAddress=" + pitchAddress +
            "&pitchIsIllumination=" + pitchIsIllumination +
            "&pitchIsCamera=" + pitchIsCamera,
            // {
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Authorization': 'JWT fefege...'
            //     }
                
            // }
            )   
    }

    getAllPitches(){
        return axios.get("http://localhost:8080/pitch/getAllPitches")
    }
}