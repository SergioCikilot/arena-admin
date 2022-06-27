import axios from "axios";
import * as consts from '../utils/consts.js';

export default class UserService{

    //constructor(){
  

    Login(
       username,
       password
        ){
            
            let loginDdata = {
               username,password}

        return axios.post(
            "https://arenahalisaha.azurewebsites.net" + "/login",
            {
                "username": username,
                "password": password
            },
            )   
    }
    
    getAllPitches(auth){

        return axios.get("https://arenahalisaha.azurewebsites.net/pitch/getAllPitches",
        {headers:{"Authorization": auth}}
        )

    }

}