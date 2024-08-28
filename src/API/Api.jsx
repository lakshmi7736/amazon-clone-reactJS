import axios from "axios";

export const BASE_URL="http://localhost:9090";

export const api=axios.create({
    baseURL: BASE_URL,
    headers:{
        "Content-Type":"application/json"
    }
})

export const data=axios.create({
    baseURL: BASE_URL,
    headers:{
        'Content-Type': 'multipart/form-data',
    }
})