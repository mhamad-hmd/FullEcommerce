
import axios from "axios";
import { useUserStore } from "./store";

const accessToken = useUserStore((state:any) => state.currentUser.accessToken)


const BASE_URL = "https://full-ecommerce-api.herokuapp.com/api"; 

const TOKEN = accessToken


export const publicRequest = axios.create({
    baseURL: BASE_URL,
}) 


export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`},
});


