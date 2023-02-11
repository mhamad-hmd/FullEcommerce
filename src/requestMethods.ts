
import axios from "axios";
import { useUserStore } from "./store";

// const accessToken = useUserStore((state:any) => state.currentUser.accessToken)


const BASE_URL = "https://eshop-38fe.onrender.com/api"; 
const currentUser = JSON.parse(window.localStorage.getItem('userLogin')!)?.state.currentUser
const TOKEN =  currentUser?.accessToken


export const publicRequest = axios.create({
    baseURL: BASE_URL,
}) 


export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`},
});


