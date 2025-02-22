"use client";

import { useCartContext } from "@/context/CartContext";

interface AddToCartProps {
  id: string;
}

function AddToCart({ id }: AddToCartProps) {
  const { addToCart,getProductQty } = useCartContext();


  const onAdd = async () => {
    const addToCartResult = await addToCart(id);
    console.log(addToCartResult);
  };

  return (
    <div className="flex gap-x-4 items-center">
      <button className="px-3 py-1 bg-red-500 text-white rounded text-xl">
        -
      </button>
      <span>{getProductQty(id)}</span>
      <button
        className="px-3 py-1 bg-blue-500 text-white rounded text-xl"
        onClick={onAdd}
      >
        +
      </button>
    </div>
  );
}

export default AddToCart;
