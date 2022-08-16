import axios from "axios";


export const restServerApi = axios.create({
    baseURL: "https://restserver-ready.herokuapp.com",

});