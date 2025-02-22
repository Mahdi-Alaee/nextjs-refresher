"use client";

import { ProductBoxProps } from "@/components/ProductBox";
import { createContext, ReactNode, useContext, useState } from "react";

interface CartItemType {
  id: string;
  qty: number;
}

export interface CartContextType {
  cartItems: CartItemType[];
  addToCart: (
    id: string
  ) => Promise<"محصول مورد نظر وجود ندارد" | "همه چی ردیفه">;
  getProductQty: (id: string) => number;
  getTotalQty: () => number;
}

const CartContext = createContext({} as CartContextType);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  const addToCart = async (id: string) => {
    const mainItem = cartItems.find((item) => item.id === id);

    const res = await fetch("http://localhost:3001/products");
    const products = (await res.json()) as ProductBoxProps[];
    const product = products.find((prd) => prd.id === id);
    if (!product) return "محصول مورد نظر وجود ندارد";

    if (mainItem) {
      //! if item exists in cart increase it
      setCartItems((items) => {
        const newItems = items.map((item) => {
          if (item.id === mainItem.id) {
            return { ...item, qty: item.qty + 1 };
          } else return item;
        });
        return newItems;
      });
    } else setCartItems((items) => [...items, { id: product.id, qty: 1 }]);

    return "همه چی ردیفه";
  };

  const getProductQty = (id: string) =>
    cartItems.find((item) => item.id === id)?.qty || 0;

  const getTotalQty = () =>
    cartItems.reduce((prev, curr) => prev + curr.qty, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, getProductQty, getTotalQty }}
    >
      {children}
    </CartContext.Provider>
  );
};
