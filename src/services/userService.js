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
            {"Access-Control-Allow-Origin": "*"}
            )   
    }
    
    getAllPitches(){

        return axios.get("http://localhost:8080/pitch/getAllPitches"
        )

    }

}