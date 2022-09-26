import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductsItem from '../Currentproducts/ProductsItem';

const PopularProducts = () => {
    const [popProducts, setPopProducts] = useState([])
    useEffect(() => {
        const getProducts = async () => {



            try {
                const res = await axios.get((
                    `http://localhost:3000/api/products`
                ))

                setPopProducts(res.data)



            } catch (err) { console.log(err) }
        }

        getProducts()
    }, []);

    return (
        <div className='grid p-5 lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 justify-between items-center m-auto md:gap-y-3 xs:gap-3 flex-wrap'>
            {
                Array.isArray(popProducts) && popProducts
                    .slice(0, 8)
                    .map((item: any) => (
                        <ProductsItem item={item} key={item._id} />
                    ))
            }

        </div>
    )
}

export default PopularProducts