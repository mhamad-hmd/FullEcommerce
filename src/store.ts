
import { mountStoreDevtool } from 'simple-zustand-devtools';
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const useStore = create(set => ({

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

    quantity: 1,
    addQuantity: (value: number) => set((_state: any) => ({
        quantity: value
    })),



}))

 const userStore = (set: any) => ({

            currentUser: Object,
            setCurrentUser: (value: object) => set(() => ({
                currentUser: value
            })),

            logging: {
                logginStart: false,
                loginSuccess: boolean
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
            name:'userLogin'
        })
    )
)


if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Store', useUserStore);

}



