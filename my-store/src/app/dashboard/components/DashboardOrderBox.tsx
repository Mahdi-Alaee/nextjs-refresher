import { ProductBoxProps } from "@/components/ProductBox";
import Link from "next/link";

interface DashboardOrderBoxProps {
  id: string;
  index: number;
  cartItems: ProductBoxProps[];
  totalPrice: number;
  discountValue: number;
  finalPrice: number;
}

function DashboardOrderBox({
  totalPrice,
  discountValue,
  finalPrice,
  index,
  id,
  cartItems,
}: DashboardOrderBoxProps) {
  console.log({ cartItems });

  return (
    <div className="bg-gray-100 p-4 flex justify-between">
      {/* left side */}
      <div>
        {/* title */}
        <h2 className="text-2xl">Order {index + 1}</h2>
        {/* products title */}
        <p className="text-lg">
          {cartItems.slice(0, 2).map((item, index) => (
            <span key={item.id}>
              {item.title}{index === 0 ? ", " : ""}
            </span>
          ))}
          {cartItems.length>2 && (
            <span>, ...</span>
          )}
        </p>
      </div>

      {/* center side */}
      <div>
        <p>Total Price: {totalPrice}</p>
        <p>dicount value: {discountValue}</p>
        <p>final Price: {finalPrice}</p>
      </div>

      <Link
        className="my-auto px-4 py-1 bg-blue-500 text-white rounded text-xl"
        href={"/dashboard/orders/" + id}
      >
        show
      </Link>
    </div>
  );
}

export default DashboardOrderBox;
