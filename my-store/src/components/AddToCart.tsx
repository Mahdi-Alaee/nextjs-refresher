"use client";

import { useCartContext } from "@/context/CartContext";
import { ProductBoxProps } from "./ProductBox";

interface AddToCartProps {
  product: ProductBoxProps;
}

function AddToCart({ product }: AddToCartProps) {
  const { addToCart } = useCartContext();

  const onAdd = async () => {
    const addToCartResult = await addToCart(product.id);
    console.log(addToCartResult);
  };

  return (
    <div className="flex gap-x-4 items-center">
      <button className="px-3 py-1 bg-red-500 text-white rounded text-xl">
        -
      </button>
      <span>3</span>
      <button className="px-3 py-1 bg-blue-500 text-white rounded text-xl" onClick={onAdd}>
        +
      </button>
    </div>
  );
}

export default AddToCart;
