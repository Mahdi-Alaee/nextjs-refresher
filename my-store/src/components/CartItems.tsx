"use client";

import { useCartContext } from "@/context/CartContext";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import { ProductBoxProps } from "./ProductBox";

function CartItems() {
  const { cartItems } = useCartContext();
  const [products, setProducts] = useState([] as ProductBoxProps[]);

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3001/products");
      const data = await res.json();
      console.log({ data });

      setProducts(data);
    })();
  }, []);

  return (
    <>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          //! get product data by cart item id
          {...products.find((prd) => prd.id === item.id)!}
          qcy={item.qty}
        />
      ))}
    </>
  );
}

export default CartItems;
