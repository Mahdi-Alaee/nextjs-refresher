"use client";

import { useCartContext } from "@/context/CartContext";
import { useEffect, useState } from "react";

interface DiscountType {
  id: string;
  code: string;
  discount: number;
}

function CartContent() {
  const { getTotalPrice } = useCartContext();
  const [totalPrice, setTotalPrice] = useState<number>();
  const [finalPrice, setFinalPrice] = useState<number>();
  const [discountValue, setDiscountValue] = useState<number>();
  const [code, setCode] = useState<string>("");

  useEffect(() => {
    console.log("print");

    (async () => {
      const result = await getTotalPrice();
      console.log({ result });

      setTotalPrice(result);
    })();
  }, [getTotalPrice]);

  const onApplyDiscount = async () => {
    const res = await fetch("http://localhost:3001/discounts?code=" + code);
    const [discountData] = (await res.json()) as DiscountType[];

    if (discountData && totalPrice){
      const disVal = ((totalPrice * discountData.discount) / 100)
      setFinalPrice(totalPrice - disVal);
      setDiscountValue(disVal)
    }
  };

  return (
    <div className="shadow-md border p-4 flex flex-col gap-y-1">
      <p>
        total price: <span>{totalPrice}</span>$
      </p>
      <p>
        total discount: <span>{discountValue}</span>$
      </p>
      <p>
        final price: <span>{finalPrice}</span>$
      </p>

      <div className="flex gap-x-1">
        <input
          className="p-2 border border-gray-400 rounded"
          placeholder="Enter discount code . . ."
          type="text"
          onChange={(e) => setCode(e.target.value)}
        />
        <button
          onClick={onApplyDiscount}
          className="bg-blue-500 text-white px-3 rounded hover:bg-blue-600"
        >
          apply
        </button>
      </div>

      <button className="bg-green-700 text-white rounded hover:bg-green-800 mx-auto text-2xl py-3 px-6">
        continue
      </button>
    </div>
  );
}

export default CartContent;
