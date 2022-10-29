import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Footer from '../../Components/Footer/Footer';
import { useStore, useUserStore } from '../../store';
import FavProducts from '../FavProducts/FavProducts';

const ProfilePage = () => {

    const [userName, setUserName] = useState('Mhamad')
    const [userEmail, setUserEmail] = useState('Mhamad.hmd20@gmail.com')
    const id = 1231423424;
    const setuserLikedProducts = useStore((state: any) => state.setuserLikedProducts)
    const currentUser = useUserStore((state: any) => state.currentUser)
    

    useEffect(() => {
        const getProducts = async () => {

            try {
                const res = await axios.get((
                    `https://full-ecommerce-api.herokuapp.com/api/products`
                ))
                setuserLikedProducts(res.data, currentUser.favProducts)

            } catch (err) { console.log(err) }
        }

        getProducts()
    }, [])


    return (
        <div className='ProfilePage flex flex-col items-center  '>
            <div className="ProfilePageWrapper / flex justify-center gap-5 / my-5  ">
                <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" className="profilePicture" />
                <div className="profileInfo">
                    <h1 className='userName'>{currentUser.username}</h1>
                    <h2 className="userEmail">{currentUser.email}</h2>
                    <h3>{currentUser._id}</h3>
                </div>
            </div>

            <div className='favoriteProducts'>
                <FavProducts />
            </div>
            <Footer/>
        </div>
    )
}

export default ProfilePage