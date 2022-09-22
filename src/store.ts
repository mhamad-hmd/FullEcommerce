
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
            products: [],
        },
        setCart: (cartQuantity: number, price: number, products: Array<object>) => set((state: any) => ({
            cart: {
                ...state.cart,
                cartQuantity: cartQuantity += 1,
                totalPrice: state.cart.totalPrice += price,
                products: [...state.cart.products, products],
            }
        })),

        setCartProductsQuantity: (productTitle: string) => set((state: any,) => (
            {
                cart: {
                    ...state.cart,
                    products: state.cart.products.map((item: productQuantity) => (
                        item.title === productTitle ? (item = { ...item, quantity: state.quantity })
                            : item
                    ))
                }
            }
        )),
        setCartTotalPrice: (cartPrice: number, productTotalPrice: number) => set((state: any) => (
            {
                cart: {
                    ...state.cart,
                    totalPrice: state.cart.products.length > 1 ? state.cart.products.reduce(
                        (acc: any, item: productQuantity) => (
                            acc.price * acc.quantity + item.price * item.quantity

                        ))
                        : state.cart.products.map((item: productQuantity) => (
                            item.price * item.quantity
                        ))

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

        category: String,
        setCategory: (location: string) => set((state: any) => (
            {
                category: location
            }

        )),

        searchTag: String,
        setSearchTag: (location: string) => set((state: any) => (
            {
                searchTag: location
            }

        ))


    }),


        {
            name: 'cart-storage',
            partialize: (state: any) => ({ cart: state.cart }),
        }

    )
)



const userStore = (set: any) => ({

    currentUser: Object,
    setCurrentUser: (value: object) => set(() => ({
        currentUser: value
    })),

    logging: {
        logginStart: new Boolean,
        loginSuccess: new Boolean,
    },
    setLogging: (logginStart: Boolean, loginSuccess: Boolean) => set((_state: any) => ({
        logging: {
            logginStart,
            loginSuccess,
        }
    })),



})



export const useUserStore = create(
    devtools(
        persist(userStore, {
            name: 'userLogin',
            partialize: (state) => ({
                currentUser: state.currentUser
            })
        })
    )
)


if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Userstore', useUserStore);
    mountStoreDevtool('Store', useStore);


}



