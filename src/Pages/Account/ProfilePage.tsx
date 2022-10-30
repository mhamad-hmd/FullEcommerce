import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Footer from '../../Components/Footer/Footer';
import { publicRequest, userRequest } from '../../requestMethods';
import { useStore, useUserStore } from '../../store';
import FavProducts from '../FavProducts/FavProducts';

const ProfilePage = () => {

    const NODE_ENV = process.env.NODE_ENV;
    const id = 1231423424;
    const [image, setImage] = useState<File | null>(null);
    const [error, setError] = useState()
    const setuserLikedProducts = useStore((state: any) => state.setuserLikedProducts)
    const currentUser = useUserStore((state: any) => state.currentUser)
    const setCurrentUser = useUserStore((state: any) => state.setCurrentUser)


    const capitalizeFirstLowercaseRest = (str: String) => {
        return str && str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

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


    const handleSubmit = async (e: Event) => {
        e.preventDefault();
        try {
            let imageUrl = "";
            if (image) {
                const formData = new FormData();
                formData.append("file", image);
                formData.append("upload_preset", "profileImages");
                const dataRes = await axios.post(
                    "https://api.cloudinary.com/v1_1/de8wnrdnn/image/upload",
                    formData
                );
                imageUrl = dataRes.data.url;
            }

            const submitPost = {
                imageUrl: imageUrl,
            };
            console.log(imageUrl)
            await userRequest.put(`/users/${currentUser._id}`, submitPost);
            
           const res =  await userRequest.get(`/users/find/${currentUser._id}`)
           console.log(res.data)
           const updatedUser = {
            accessToken:currentUser.accessToken,
           }
           Object.assign(updatedUser, res.data)
           console.log(updatedUser)
            setCurrentUser(updatedUser)
            console.log('SUCCESS')
        } catch (err: any) {
            console.log(err)
        }
    }


    const backgroundImage = {
    background: `url(${currentUser.imageUrl})`

    }

    return (
        <div className='ProfilePage flex flex-col items-center  '>
            <div className="ProfilePageWrapper / flex justify-center gap-5 / py-10  " style={backgroundImage}>
                <img src={currentUser.imageUrl} alt="" className="profilePicture" />
                <div className="profileInfo">
                    <h1 className='userName'>{capitalizeFirstLowercaseRest(currentUser.username)}</h1>
                    <h2 className="userEmail">{currentUser.email}</h2>
                    <h3>{currentUser._id}</h3>
                </div>
                <div>
                    <form action="" onSubmit={(e: any) => handleSubmit(e)}>
                        <input type="file" accept='image/*' name="" id="" onChange={(e) => setImage(e.target.files![0])} />
                        <button type='submit'>SUBMIT</button>
                    </form>
                </div>
            </div>

            <div className='favoriteProducts'>
                <FavProducts />
            </div>
            <Footer />
        </div>
    )
}

export default ProfilePage