import { useStore, useUserStore } from "./store"
import React, { useEffect, useState } from 'react'
import { publicRequest } from "./requestMethods"
import { subscribeWithSelector } from 'zustand/middleware'



export const login = async (user: Object) => {
    try {
        useUserStore.setState({
            logging: {
                logginStart: true,
                loginSuccess: false,
                register:false
            }
        })
        const res = await publicRequest.post("/auth/login", user);
        useUserStore.setState({
            logging: {
                logginStart: false ,
                loginSuccess: true,
                register:false
            }
        })
        useUserStore.setState({currentUser:res.data})


    } catch (err) { useUserStore.setState({
        logging: {
            logginStart: false,
            loginSuccess: false,
            register:false
        }
    }) }

}


export const register = async (user: Object) => {
    try {
        useUserStore.setState({
            logging: {
                logginStart: true,
                loginSuccess: false,
                register:false
            }
        })
        const res = await publicRequest.post("/auth/register", user);
        useUserStore.setState({
            logging: {
                logginStart: false ,
                loginSuccess: false,
                register:true
            }
        })
        useUserStore.setState({currentUser:res.data})


    } catch (err) { useUserStore.setState({
        logging: {
            logginStart: false,
            loginSuccess: false,
            register:false
        }
    }) }

}



