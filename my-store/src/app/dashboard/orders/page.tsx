import { OrderType } from "@/types/order";
import DashboardOrderBox from "../components/DashboardOrderBox";
import { ProductBoxProps } from "@/components/ProductBox";

async function Orders() {
  const ordersRes = await fetch('http://localhost:3001/orders');
  const ordersData = await ordersRes.json() as OrderType[];
  const productsRes = await fetch('http://localhost:3001/products');
  const productsData = await productsRes.json() as ProductBoxProps[];

  console.log(ordersData);
  

  return (
    <div className="flex flex-col gap-y-6">
      {/* page title */}
      <h1 className="text-center text-4xl">Products List</h1>
      {/* orders */}
      <div className="mt-12 grid gap-y-3">
        {ordersData.map((order,index) => (
          <DashboardOrderBox key={order.id} {...order} index={index} cartItems={order.cartItems.map(item => productsData.find(prd => prd.id === item.id) as ProductBoxProps)} id={order.id} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
