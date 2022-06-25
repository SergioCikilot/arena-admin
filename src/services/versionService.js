import axios from "axios"


export default class VersionService{

    getVersion(){

        return axios.get("https://arenahalisaha.azurewebsites.net/showCurrentVersion")
        
    }

    

}