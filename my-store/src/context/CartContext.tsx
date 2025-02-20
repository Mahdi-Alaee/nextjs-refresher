'use client'

import { createContext, ReactNode, useContext, useState } from "react";

interface CartItemType {id:string,qty:number}

export interface CartContextType{
    cartItems?: CartItemType[];
    addToCart?: () => void
}

const CartContext = createContext<CartContextType>({});

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}: { children: ReactNode }) => {
    const [cartItems,setCartItems] = useState<CartItemType[]>([]);

    const addToCart = () => {
        setCartItems([{id: '2',qty: 2}]);
    }


  return <CartContext.Provider value={{cartItems,addToCart}}>{children}</CartContext.Provider>;
};
