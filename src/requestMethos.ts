
import axios from "axios";

const BASE_URL = "http://localhost:3000/api"; 

const TOKEN  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjJkYjliMzRkYWIzYWRmY2Q4OWJjNyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjMzOTMwNDIsImV4cCI6MTY2MzY1MjI0Mn0.OKcKgml_3H6Tkr0Z0jl9cQJDHAzo0ovKqimgac5-VFc"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
}) 


export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: ({token: `Bearer ${TOKEN}`})
})


