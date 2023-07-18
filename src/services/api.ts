import axios from "axios";

export const api = axios.create({
    baseURL: "https://kenzie-movieapi.onrender.com/",
    timeout: 8000,
})