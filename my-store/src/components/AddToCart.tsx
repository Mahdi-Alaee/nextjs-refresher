"use client";

import { useCartContext } from "@/context/CartContext";

function AddToCart() {
  const { cartItems } = useCartContext();
  console.log({cartItems});
  

  return (
    <div className="flex gap-x-4 items-center">
      <button className="px-3 py-1 bg-red-500 text-white rounded text-xl">
        -
      </button>
      <span>3</span>
      <button className="px-3 py-1 bg-blue-500 text-white rounded text-xl">
        +
      </button>
    </div>
  );
}

export default AddToCart;
