
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Link, Navigate, NavLink } from 'react-router-dom'
import { userRequest } from '../../requestMethods'
import { useStore, useUserStore } from '../../store'
import './productsItem.scss'
import _ from 'lodash';
import UserAlert from '../UserAlert/UserAlert'


type item = {
    _id: string,
    img: string,
    title:string,
}

const ProductsItem = ({ item, index }: { item: item; index:number} ) => {

    
const currentUser = useUserStore((state:any) => state.currentUser)
const setCurrentUser = useUserStore((state:any) => state.setCurrentUser)
const setUserFavProducts = useUserStore((state:any) => state.setUserFavProducts)
const rmvUserFavProducts = useUserStore((state:any) => state.rmvUserFavProducts)

const likedProducts = useUserStore((state:any) => state.likedProducts)
const setlikedProducts = useUserStore((state:any) => state.setlikedProducts)
const [liked, setLiked] = useState(false);
const productContainer = useRef(null)
const user = Object.keys(currentUser).length !== 0;
const productsInView = useIsInViewport(productContainer);
const setAlertSwitch = useStore((state) => state.setAlertSwitch)
const alertSwitch = useStore((state) => state.alertSwitch)



useEffect(() => {

    const addToFavorite = async () => {
        
         try {
             const res = await userRequest.put("/users/"+currentUser._id,
             {
                favProducts: currentUser.favProducts
             });
         } catch (err) { console.log(err)}
     
     }
      addToFavorite()

}, [currentUser.favProducts])



useEffect(() => {
    setLiked(currentUser.favProducts?.length > 0 && currentUser.favProducts.some((product:item) => {
         if(_.isEqual(product, item._id)) {
            return true
         }
         else{
            return false
         }

    }))
},[currentUser.favProducs])

    const handleLiked = () => {
        if(user){

            if(liked === false)
            {
                setLiked(true)
                setUserFavProducts(item._id)
            }
            else if(liked === true){
                setLiked(false)
                rmvUserFavProducts(item._id)
            }
        }else{
            setAlertSwitch(true)
        }
    }

    const transform = {
        transform: `translateY(${ productsInView? 0 : 5 * index}%)`
    }


    return (
        <div ref={productContainer} className='ProductContainer flex justify-center items-center m-auto m-1' style={transform}>

            <img className='object-cover' src={item.img} alt="" />

            <div className='productInfo'>

                <div className='icon'>
                    <a href={`/product/${item._id}`}>
                        <svg className="flex-1 w-6 h-6 fill-current" viewBox="0 0 24 24">
                            <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                        </svg>
                    </a>
                </div>

                <div className={`icon ${liked && "bg-red-400"}`}>
                    <svg onClick={handleLiked} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 `}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                </div>

            </div>

        </div>
    )
}

function useIsInViewport(ref:any) {
    const [isIntersecting, setIsIntersecting] = useState(false);
  
    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting),
        ),
      [],
    );
  
    useEffect(() => {
      observer.observe(ref.current);
  
      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);
  
    return isIntersecting;
  }



export default ProductsItem