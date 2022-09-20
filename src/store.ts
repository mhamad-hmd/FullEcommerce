
import { mountStoreDevtool } from 'simple-zustand-devtools';
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const useStore = create(
   persist (set => ({

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



}),

{
    name: 'cart-storage', 
    partialize: (state:any) => ({cart: state.cart }),
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
            partialize: (state) =>({
                currentUser:state.currentUser
            })
        })
    )
)


if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Userstore', useUserStore);
    mountStoreDevtool('Store', useStore);


}



