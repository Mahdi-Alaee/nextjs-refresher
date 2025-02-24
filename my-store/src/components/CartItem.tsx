import Image from "next/image";
import { ProductBoxProps } from "./ProductBox";
import AddToCart from "./AddToCart";

export interface CartItemProps extends ProductBoxProps {
  qcy: number;
}

function CartItem({ image, title, qcy, price, id }: CartItemProps) {
  return (
    <div className="grid bg-gray-100 grid-cols-12">
      {/* Image */}
      {image && (
        <Image
          className="col-span-2"
          src={image}
          alt="cart image"
          width={10000}
          height={10000}
        />
      )}
      {/* content */}
      <div className="col-span-10 flex flex-col gap-y-2 p-4">
        {/* title */}
        <h2 className="text-lg font-bold">{title}</h2>
        {/* count */}
        <p>
          count: <span>{qcy}</span>
        </p>
        {/* price */}
        <p>
          price: <span>{price * qcy || ''}</span>$
        </p>

        {/* buttons */}
        <AddToCart id={id} />
      </div>
    </div>
  );
}

export default CartItem;
