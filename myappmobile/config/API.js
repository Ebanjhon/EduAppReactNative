import axios from "axios";

const HOST = "https://nmau4669.pythonanywhere.com";

export const endpoints = {
    'login': '/o/token/',
    'course': '/Course/',
    'current_user': '/User/current_user/'
}


export const authApi = (accessToken) => axios.create({
    baseURL: HOST,
    headers: {
        "Authorization": `bearer ${accessToken}`
    }
})

export default axios.create({
    baseURL: HOST
})

