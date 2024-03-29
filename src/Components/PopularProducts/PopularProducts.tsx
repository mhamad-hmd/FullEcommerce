import axios from 'axios';
import { useEffect, useState } from 'react'
import { useStore } from '../../store';
import ProductsItem from '../Currentproducts/ProductsItem';
import UserAlert from '../UserAlert/UserAlert';

const PopularProducts = () => {
    const [popProducts, setPopProducts] = useState([])
    const alertSwitch = useStore((state) => state.alertSwitch)

    useEffect(() => {
        const getProducts = async () => {

            try {
                const res = await axios.get((
                    `https://eshop-38fe.onrender.com/api/products`
                ))

                setPopProducts(res.data)



            } catch (err) { console.log(err) }
        }

        getProducts()
    }, []);

    return (
        <div className='grid p-5 relative overflow-hidden lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 justify-between items-center m-auto md:gap-y-3 xs:gap-3 flex-wrap'>
            {alertSwitch && <UserAlert />}

            {
                Array.isArray(popProducts) && popProducts
                    .slice(0, 8)
                    .map((item: any, index: number) => (
                        <ProductsItem index={index} item={item} key={item._id} />
                    ))
            }

        </div>
    )
}

export default PopularProducts