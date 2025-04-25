"use client";

import { useCartContext } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

interface DiscountType {
  id: string;
  code: string;
  discount: number;
}

function CartContent() {
  const { getTotalPrice, cartItems, clearCart } = useCartContext();
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [finalPrice, setFinalPrice] = useState<number>(0);
  const [discountValue, setDiscountValue] = useState<number>(0);
  const [code, setCode] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const result = await getTotalPrice();
      setTotalPrice(result);
    })();
  }, [getTotalPrice]);

  const onApplyDiscount = async () => {
    const res = await fetch("http://localhost:3001/discounts?code=" + code);
    const [discountData] = (await res.json()) as DiscountType[];

    if (discountData && totalPrice) {
      const disVal = (totalPrice * discountData.discount) / 100;
      setFinalPrice(totalPrice - disVal);
      setDiscountValue(disVal);
    } else toast.error("Your discount code is not valid!");
  };

  const onOrder = async () => {
    if (cartItems.length < 1) {
      toast.error("There is no product to order!");
      return false;
    }

    const newOrder = {
      id: crypto.randomUUID(),
      cartItems,
      totalPrice,
      discountValue,
      finalPrice,
    };

    const res = await fetch("http://localhost:3001/orders", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newOrder),
    });

    if (res.status === 201) {
      toast.success("your order has been registered successfully!");
      clearCart();
      setTimeout(() => {
        router.push("/");
      }, 2000);
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

      <button
        onClick={onOrder}
        className="bg-green-700 text-white rounded hover:bg-green-800 mx-auto text-2xl py-3 px-6"
      >
        order
      </button>

      <ToastContainer position="top-center" />
    </div>
  );
}

export default CartContent;
