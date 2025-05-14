import { ProductBoxProps } from "@/components/ProductBox";
import { OrderType } from "@/types/order";
import Link from "next/link";

interface DashboardOrderBoxProps extends OrderType{
    index:number;
    cartItems: ProductBoxProps[]
}

function DashboardOrderBox({totalPrice,discountValue,finalPrice,index} : DashboardOrderBoxProps) {
    return ( 
        <div className="bg-gray-100 p-4 flex justify-between">
            {/* left side */}
            <div>
                {/* title */}
                <h2 className="text-2xl">Order {index + 1}</h2>
                {/* products title */}
                <p className="text-lg">product title 1, product title 2, ...</p>
            </div>

            {/* center side */}
            <div>
                <p>Total Price: {totalPrice}</p>
                <p>dicount value: {discountValue}</p>
                <p>final Price: {finalPrice}</p>
            </div>

            <Link className="my-auto px-4 py-1 bg-blue-500 text-white rounded text-xl" href="/dashboard/orders/:id">show</Link>
        </div>
     );
}

export default DashboardOrderBox;