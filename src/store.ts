
import { mountStoreDevtool } from 'simple-zustand-devtools';
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';


type products = {
    id: string,
    title: string,
}

type currentUser = {
    accesstoken:String
}

type productQuantity = {
    forEach(arg0: (objectItem: any) => any): unknown;
    title: string,
    quantity: number,
    price: number
}

export const useStore = create(
    persist(set => ({

        cart: {
            cartQuantity: 0,
            cartProducts: [],
            cartId:String
        },
        setCart: (products: any, currentcartId:String) => set((state: any) => ({
            cart: {
                ...state.cart,
                cartProducts: products,
                cartQuantity: state.cart.cartProducts.length,
                cartId: currentcartId
            }
        })),
        setCartProducts: (products: any) => set((state: any) => ({
            cart: {
                ...state.cart,
                cartProducts: products,

            }
        })),
        
        setCartQuantity: () => set((state: any) => (
            {
                cart: {
                    ...state.cart,
                    cartQuantity: state.cart.cartProducts.length
                }
            }
        )),
        removeProduct: (filteredProducts: Array<object>) => set((state: any) => (
            {
                cart: {
                    ...state.cart,
                    cartProducts: filteredProducts
                }
            }
        )),

        setCartProductsQuantity: (index: number) => set((state: any,) => (
            {
                cart: {
                    ...state.cart,
                    cartProducts: state.cart.cartProducts.map((item: productQuantity, i: Number) => (
                        i === index ? (item = { ...item, quantity: state.quantity })
                            : item
                    ))
                }
            }
        )),
        totalPrice:0,
        setCartTotalPrice: () => set((state: any) => (
            {
               
                totalPrice: state.cart.cartProducts.reduce(
                        (acc: any, item: productQuantity) => (
                            acc + item.price * item.quantity

                        ), 0)  

            
            }
        )),

        quantity: 1,
        setQuantity: (value: number) => set((state: any) => (
            {
                quantity: value
            }
        )),
        addQuantity: (productQuantity: number) => set((state: any) => ({
            quantity: state.quantity = productQuantity + 1
        })),
        subtractQuantity: (productQuantity: number) => set((state: any) => ({
            quantity: state.quantity = productQuantity - 1
        })),

        searchInputs: '',
        setSearchInputs: (Usearch: string) => set((State: any) => (
            {
                searchInputs: Usearch
            }
        )),

        category: '',
        setCategory: (location: string) => set((state: any) => (
            {
                category: location
            }

        )),

        searchTag: '',
        setSearchTag: (location: string) => set((state: any) => (
            {
                searchTag: location
            }

        )),
        resetQueries: () => set((state: any) => (
            {
                searchTag: '',
                category: ''
            }
        )),

        products: Array,
        setProducts: (addProduct: any) => set((state: any) => (
            {
                products: addProduct
            }
        )),

        checkQuery: false,
        setCheckQuery: () => set((state: any) => (

            {
                checkQuery: state.searchTag || state.category ? true : false
            }
        )),
        alertSwitch: false,
        setAlertSwitch: (Alert:Boolean) => set((state: any) => (
            {
                alertSwitch: Alert
            }
        )),
        userLikedProducts: [],
        setuserLikedProducts: (products: Array<object>, likedId: Array<String>) => set((state: any) => (
            {
                userLikedProducts: products.filter((crntProducts: any) => {
                    return likedId.some((id: any) => {
                        if (id === crntProducts._id) {
                            return true
                        }
                        else {
                            return false
                        }
                    })
                })
            }

        ))

    }),




        {
            name: 'cart-storage',
            partialize: (state: any) => ({ searchTag: state.searchTag }),
        }

    )
)



const userStore = (set: any) => ({

    currentUser:{} ,
    setCurrentUser: (value: object) => set(() => ({
        currentUser: value
    })),
    setUserFavProducts: (products: string) => set((state: any) => (
        {
            currentUser: {
                ...state.currentUser,
                favProducts: [...state.currentUser.favProducts, products]
            }
        }
    )),
    rmvUserFavProducts: (products: string) => set((state: any) => (
        {
            currentUser: {
                ...state.currentUser,
                favProducts: state.currentUser.favProducts.filter((id: string) => {
                    return id !== products
                })
            }
        }
    )),

    logging: {
        logginStart: new Boolean,
        loginSuccess: new Boolean,
        register: new Boolean,
    },
    setLogging: (logginStart: Boolean, loginSuccess: Boolean, register: Boolean) => set((_state: any) => ({
        logging: {
            logginStart,
            loginSuccess,
            register,
        }
    })),
    likedProducts: [],
    setlikedProducts: (product: string) => set((state: any) => (
        {
            likedProducts: [...state.currentUser.favProducts, product]
        }
    ))



})



export const useUserStore = create(
    devtools(
        persist(userStore, {
            name: 'userLogin',
            partialize: (state) => ({
                currentUser: state.currentUser,
                likedProducts: state.likedProducts
            })
        })
    )
)


if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Userstore', useUserStore);
    mountStoreDevtool('Store', useStore);


}



