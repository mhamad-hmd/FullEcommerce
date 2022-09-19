
import create from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';

export const useStore = create(set => ({

    cart: {
        cartQuantity: 0,
        totalPrice: 0,
        products: [],
    },
    setCart: (cartQuantity: number, price: number, products: Array<object>) => set((state: any) => ({
        cart: {
            ...state.cart,
           cartQuantity: cartQuantity+=1,
            totalPrice: state.cart.totalPrice+=price,
            products: [...state.cart.products, products],
        }
    })),

    quantity: 1,
    addQuantity: (value: number) => set((state: any) => ({
        quantity: value
    })),



}))

export const userStore = create(set => ({
    currentUser:Object,
    setCurrentUser: (value:object) => set ((state:any) => ({
        currentUser:value
    })),

    logging:{
        logginStart:Boolean,
        loginSuccess:Boolean
    },
    setLogging: (logginStart:Boolean, loginSuccess:Boolean) => set ((state:any) => ({
        logging:{
            logginStart,
            loginSuccess,
        }
    }))

}))




if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Store', userStore);

  }