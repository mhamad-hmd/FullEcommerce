
import { mountStoreDevtool } from 'simple-zustand-devtools';
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';



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
            totalPrice: 0,
            cartProducts: [],
        },
        setCart: (cartQuantity: number, price: number, products: Array<object>) => set((state: any) => ({
            cart: {
                ...state.cart,
                totalPrice: state.cart.totalPrice += price,
                cartProducts: [...state.cart.cartProducts, products],
                cartQuantity: state.cart.cartProducts.length
            }
        })),
        setCartQuantity:() => set((state:any) => (
            { cart: {
              ...state.cart,
              cartQuantity: state.cart.cartProducts.length
              }
          } 
          )),
        removeProduct:(filteredProducts:Array<object>) => set((state:any) => (
          { cart: {
            ...state.cart,
            cartProducts: filteredProducts
            }
        } 
        )),

        setCartProductsQuantity: (index: number) => set((state: any,) => (
            {
                cart: {
                    ...state.cart,
                    cartProducts: state.cart.cartProducts.map((item: productQuantity, i:Number) => (
                        i === index ? (item = { ...item, quantity: state.quantity })
                            : item
                    ))
                }
            }
        )),
        setCartTotalPrice: (cartPrice: number, productTotalPrice: number) => set((state: any) => (
            {
                cart: {
                    ...state.cart,
                    totalPrice:  state.cart.cartProducts.reduce(
                        (acc: any, item: productQuantity) => (
                            acc + item.price * item.quantity

                        ),0)
                        // : state.cart.cartProducts.map((item: productQuantity) => (
                        //     item.price * item.quantity
                        // ))   

                }
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
        resetQueries: () => set((state:any) => (
            {
                searchTag: '',
                category: ''
            }
        )),

        products: Array,
        setProducts: (addProduct:any) => set((state:any) => (
            {
                products: addProduct
            }
        )),
       

        checkQuery: false,
        setCheckQuery : () => set ((state:any) => (
            
            {
                checkQuery: state.searchTag || state.category ? true : false
            }
        )),
        
    }),

    


        {
            name: 'cart-storage',
            partialize: (state: any) => ({ cart: state.cart, searchTag:state.searchTag }),
        }

    )
)



const userStore = (set: any) => ({

    currentUser: {},
    setCurrentUser: (value: object) => set(() => ({
        currentUser: value
    })),

    logging: {
        logginStart: new Boolean,
        loginSuccess: new Boolean,
        register: new Boolean,
    },
    setLogging: (logginStart: Boolean, loginSuccess: Boolean, register:Boolean) => set((_state: any) => ({
        logging: {
            logginStart,
            loginSuccess,
            register,
        }
    })),
    likedProducts: [],
    setlikedProducts: (product:Object) => set((state:any) => (
        {
            likedProducts:[...state.likedProducts, product ]
        }
    ))



})



export const useUserStore = create(
    devtools(
        persist(userStore, {
            name: 'userLogin',
            partialize: (state) => ({
                currentUser: state.currentUser,
                likedProducts:state.likedProducts
            })
        })
    )
)


if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Userstore', useUserStore);   
    mountStoreDevtool('Store', useStore);


}



