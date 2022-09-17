
import create from 'zustand';

export const useStore = create(set => ({

    cart: {
        quantity: Number,
        price: Number,
        products: Array,
    },
    setCart: (quantity: number, price: number, products: Array<object>) => set((state: any) => ({
        cart: {
            ...state.cart,
            quantity,
            price,
            products,
        }
    })),

    quantity: 1,
    addQuantity: (value: number) => set((state: any) => ({
        quantity: value
    })),

    products: [],
    setProduct: (product: object) => set((state: any) => ({
        products: [...state.products, product]
    }))


}))

