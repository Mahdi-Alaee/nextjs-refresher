import Image from "next/image";
import { ProductBoxProps } from "./ProductBox";

export interface OrderProductBoxProps extends ProductBoxProps {
  qty: number;
}

function OrderProductBox({ image, price, qty, title }: OrderProductBoxProps) {
  return (
    <div className="flex justify-between bg-gray-100">
      {/* left */}
      <div className="flex">
        <Image className="w-40 h-32" src={image} alt={title} width='10000' height='10000' />

        {/* content */}
        <div className="flex flex-col gap-y-2 pl-4 pt-2">
          <h2 className="font-bold text-lg">{title}</h2>
          <p>price: {price}</p>
          <p>count: {qty}</p>
        </div>
      </div>
      {/* right */}
      <p className="px-3 py-2 bg-green-500 text-white my-auto mr-4 rounded-md text-lg">paid</p>
    </div>
  );
}

export default OrderProductBox;
