"use client";

import { ProductBoxProps } from "@/components/ProductBox";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

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
  removeFromCart: (id: string) => "محصول وجود ندارد" | "با موفقیت حذف شد";
  getTotalPrice: () => Promise<number>;
  clearCart: () => void
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

  const removeFromCart = (id: string) => {
    const mainItem = cartItems.find((item) => item.id === id);

    if (!mainItem) return "محصول وجود ندارد";

    setCartItems((items) => {
      if (mainItem.qty === 1) {
        return items.filter((item) => item.id !== id);
      } else
        return items.map((item) => ({
          ...item,
          qty: item.id === id ? item.qty - 1 : item.qty,
        }));
    });
    return "با موفقیت حذف شد";
  };

  const getProductQty = (id: string) =>
    cartItems.find((item) => item.id === id)?.qty || 0;

  const getTotalQty = () =>
    cartItems.reduce((prev, curr) => prev + curr.qty, 0);

  const getTotalPrice = async () => {
    const res = await fetch("http://localhost:3001/products");
    const products = (await res.json()) as ProductBoxProps[];

    const itemsIds = cartItems.map((item) => item.id);

    const cartProducts = products.filter(
      (prd) => itemsIds.includes(prd.id) && prd
    );

    const finalCartProducts = cartProducts.map((prd) => ({
      ...prd,
      qty: cartItems.find((item) => item.id === prd.id)?.qty as number,
    }));

    return finalCartProducts.reduce(
      (prev, curr) => prev + curr.price * curr.qty,
      0
    );
  };

  const clearCart = () => setCartItems([])

  useEffect(() => {
    if (cartItems.length >= 1)
      localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const localStorageCart = localStorage.getItem("cart");
    if (localStorageCart) setCartItems(JSON.parse(localStorageCart));
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        getProductQty,
        getTotalQty,
        removeFromCart,
        getTotalPrice,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
