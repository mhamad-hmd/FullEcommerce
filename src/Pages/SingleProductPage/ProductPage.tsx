
import React, { useEffect, useState } from 'react'
import './ProductPage.scss'
import Footer from '../../Components/Footer/Footer'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'
import { useLocation } from 'react-router-dom'
import { publicRequest, userRequest } from '../../requestMethods'
import { useStore, useUserStore } from '../../store'
import UserAlert from '../../Components/UserAlert/UserAlert'


type Product = {
    length: number
    color: Array<string>,
    title: String,
    desc: String,
    img: string,
    price: number,
    size: Array<string>,
    _id: String
}


const ProductPage = () => {

    const setAlertSwitch = useStore((state) => state.setAlertSwitch)
    const alertSwitch = useStore((state) => state.alertSwitch)
    const currentUser = useUserStore((state: any) => state.currentUser)
    const user = Object.keys(currentUser).length !== 0;
    const setCartTotalPrice = useStore((state: any) => state.setCartTotalPrice)
    const addQuantity = useStore((state: any) => state.addQuantity)
    const quantity = useStore((state: any) => state.quantity)
    const subtractQuantity = useStore((state: any) => state.subtractQuantity)
    const setCartProducts = useStore((state: any) => state.setCartProducts)
    const cart = useStore((state: any) => state.cart)
    const location = useLocation();
    //  fetching id from the current url location
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState<Product>(Object);
    const [size, setSize] = useState(String);
    const [color, setColor] = useState(String);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/" + id);
                await setProduct(res.data)

            } catch (err) { console.log(err) }
        }

        getProduct()

    }, [id])

    const handleClick = (type: string) => {
        if (type === 'desc') {
            quantity > 1 && subtractQuantity(quantity)
        } else {

            addQuantity(quantity)
        }

    }

    useEffect(() => {
        const putCart = async () => {
            try {
                const res = await userRequest.put(`/cart/${cart.cartId}`,
                    {
                        products: cart.cartProducts
                    }
                )
            } catch (err) { console.log(err) }
  
        }
        putCart()
    }, [cart.cartProducts])
    



    const addToCart = async () => {
if(user){
    
    setCartProducts([...cart.cartProducts, {
        _id:product._id,
        img: product.img,
        productsId: product._id,
        quantity: quantity,
        price: product.price,
        size: size,
        color: color
    }])
    setCartTotalPrice()
}else{
    setAlertSwitch(true)
}

    }


    const optionHandeler = (item: any) => {
        setColor(item)
        document.getElementById('filterColorContainer')?.classList.add('filterColorContainerActive')
    }




    return (
        <div className='ProductPageContainer relative'>

            {alertSwitch && <UserAlert/>}
            <div className="productWrapper / md:p-10  / flex md:flex-row xs:flex-col /">

                <div className="imgContainer flex-1">
                    <img className='productImg ' src={product.img} alt="" />
                </div>

                <div className="ProductinfoContainer / flex-1 / md:px-10 xs:p-2">
                    <h1 className='font-extralight text-4xl'>{product.title}</h1>
                    <p className='my-5'>{product.desc}
                    </p>
                    <span className='font-thin text-4xl'>$ {product.price * quantity}</span>


                    <div className="filterContainer flex justify-between ">

                        <div className="filter flex justify-center items-center gap-2">
                            <span className="filterTitle font-extralight text-xl">Color</span>
                            {product.color?.map((item: string) => (
                                
                                <div id='filterColorContainer' className='filterColorContainer'>
                                    <option style={{ background: `${item}`, border: `${item} 1px solid` }} className="filterColor" key={item} onClick={() => optionHandeler(item)}></option>
                                </div>
                            ))}



                        </div>

                        <div className="filter / flex">
                            <span className="filterTitle font-extralight text-xl">Size</span>
                            <select name="" required id="" className="filterSize ml-2 p-1 outline-none" onChange={(e) => setSize(e.target.value)}>
                                <option value="" hidden></option>
                                {product.size?.map((item: string) => (
                                    <option key={item}>{item}</option>
                                    ))}


                            </select>
                        </div>

                    </div>
                    <div className="addContainer flex justify-between items-center">

                        <div className="amountContainer flex items-center gap-2 font-bold  ">

                            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => { handleClick("desc") }} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-6 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                            </svg>

                            <span className='amount flex justify-center items-center mx-1 '>{quantity}</span>

                            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => { handleClick("asc") }} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-6 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>


                        </div>
                        <button className='addToCartBtn' onClick={addToCart}>ADD TO CART</button>

                    </div>
                </div>
            </div>

            <NewsLetter />
            <Footer />

        </div>
    )
}

export default ProductPage