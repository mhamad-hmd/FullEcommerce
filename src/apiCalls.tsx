import { useStore, useUserStore } from "./store"
import React, { useEffect, useState } from 'react'
import { publicRequest } from "./requestMethods"
import { subscribeWithSelector } from 'zustand/middleware'



export const login = async (user: Object) => {
    try {
        useUserStore.setState({
            logging: {
                logginStart: true,
                loginSuccess: false
            }
        })
        const res = await publicRequest.post("/auth/login", user);
        useUserStore.setState({
            logging: {
                logginStart: false ,
                loginSuccess: true,
            }
        })
        useUserStore.setState({currentUser:res.data})


    } catch (err) { useUserStore.setState({
        logging: {
            logginStart: false,
            loginSuccess: false
        }
    }) }

}
