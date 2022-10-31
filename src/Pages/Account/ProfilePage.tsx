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
    const [editMode, seteditMode] = useState(false)
    const setuserLikedProducts = useStore((state: any) => state.setuserLikedProducts)
    const currentUser = useUserStore((state: any) => state.currentUser)
    const setCurrentUser = useUserStore((state: any) => state.setCurrentUser)
    const [updatedUser, setUpdatedUser] = useState({
        name: "",
        email: ""
    })


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
                imageUrl: imageUrl || currentUser.imageUrl,
                username: updatedUser.name || currentUser.name,
                email: updatedUser.email || currentUser.email
            };
            await userRequest.put(`/users/${currentUser._id}`, submitPost);

            const res = await userRequest.get(`/users/find/${currentUser._id}`)
            const { ...others } = res.data
            const accessToken = {
                accessToken: currentUser.accessToken
            }

            setCurrentUser({ ...others, ...accessToken })
            seteditMode(false)
        } catch (err: any) {
            console.log(err)
        }
    }


    const backgroundImage = {
        background: `url(${currentUser.imageUrl})`

    }



    return (
        <div className='ProfilePage flex flex-col items-center   '>
            <div className="ProfilePageWrapper / flex justify-center gap-5 / py-10 relative " style={backgroundImage}>
                <img src={currentUser.imageUrl} alt="" className="profilePicture xs:hidden md:block" />
                <form className={`ProfilePageForm / flex flex-col / relative ${editMode ? "pointer-events-auto" : "pointer-events-none"} `} onSubmit={(e: any) => handleSubmit(e)}>
                    <input className={`formInput profileInput  imageInput ${editMode ? "visible" : "invisible"}`} type="file" accept='image/*' name="" id="" onChange={(e) => setImage(e.target.files![0])} />
                    <input className='formInput profileInput  nameInput userName' type="text" name="name" maxLength={15} id="" onChange={(e) => setUpdatedUser({ ...updatedUser, name: e.target.value.toLowerCase() })} defaultValue={capitalizeFirstLowercaseRest(currentUser.username)} />
                    <input className='formInput profileInput  userEmail' type="email" name="email" id="" onChange={(e) => setUpdatedUser({ ...updatedUser, email: e.target.value })} defaultValue={currentUser.email} />
                    <h3>{currentUser._id}</h3>
                    <div className='flex gap-5 py-5'>
                        <button className={`formBtn text-start ${editMode ? "visible" : "invisible"}`} type='submit'>Save</button>
                        <button className={`formBtn text-start ${editMode ? "visible" : "invisible"}`} onClick={() => seteditMode(false)} >Cancel</button>
                    </div>
                </form>
                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => seteditMode(true)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="editBtn w-8 h-8 absolute cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>

            </div>



            <div className='favoriteProducts'>
                <FavProducts />
            </div>
            <Footer />
        </div>
    )
}

export default ProfilePage