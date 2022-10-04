
import axios from "axios";
import { useUserStore } from "./store";

const BASE_URL = "https://full-ecommerce-api.herokuapp.com/api"; 

const TOKEN = useUserStore.getState().currentUser.accessToken;


export const publicRequest = axios.create({
    baseURL: BASE_URL,
}) 


export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`},
});


