
import axios from "axios";

const BASE_URL = "https://full-ecommerce-api.herokuapp.com/api"; 

const TOKEN  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjJkYjliMzRkYWIzYWRmY2Q4OWJjNyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjM1NzM4NDksImV4cCI6MTY2MzgzMzA0OX0.AF88ZLAw5UqUiVkFeiTO0n9z_wtCA29LwFag9COYNnw    "

export const publicRequest = axios.create({
    baseURL: BASE_URL,
}) 


export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`},
});


