
import create from 'zustand';

export const useStore = create(set => ({

    cart: {},
    setCart:(value:any) => set((state:any) => ({
        cart: {
            ...state.cart,
            value,
            
        }
    })),

    quantity: 1,
    addQuantity: (value:number) => set((state:any) => ({
        quantity:value
    }))


}))

