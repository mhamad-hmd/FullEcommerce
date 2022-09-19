import { userStore } from "./store"
import React, { useEffect, useState } from 'react'
import { publicRequest } from "./requestMethods"

const setlogging = userStore((state:any) => state.setLogging)
const setCurrentUser = userStore((state:any) => state.setCurrentUser)



export const login =  async (user:Object) => {
    setlogging(true,false)
    try{
        const res = await publicRequest.post("/auth/login", user);
        setlogging(false, false);
        setCurrentUser(res.data)

        
    } catch (err){setlogging(false,false)}

}
