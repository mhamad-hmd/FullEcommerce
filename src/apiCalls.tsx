import { userStore, useStore, useUserStore } from "./store"
import React, { useEffect, useState } from 'react'
import { publicRequest } from "./requestMethods"
import { subscribeWithSelector } from 'zustand/middleware'



export const login = async (user: Object) => {
    try {
        userStore.setState({
            logging: {
                logginStart: true,
                loginSuccess: Boolean
            }
        })
        const res = await publicRequest.post("/auth/login", user);
        useUserStore.setState({
            logging: {
                logginStart: false,
                loginSuccess: true
            }
        })
        userStore.setState({currentUser:res.data})


    } catch (err) { userStore.setState({
        logging: {
            logginStart: false,
            loginSuccess: false
        }
    }) }

}
