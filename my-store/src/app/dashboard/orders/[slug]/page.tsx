import { OrderType } from "@/types/order";
import OrderProductBox, {
  OrderProductBoxProps,
} from "@/components/OrderProductBox";
import { ProductBoxProps } from "@/components/ProductBox";

interface OrderPageProps {
  params: Promise<{ slug: string }>;
}

async function OrderPage({ params }: OrderPageProps) {
  const { slug } = await params;
  console.log({ slug });

  //! All Products
  const productsRes = await fetch("http://localhost:3001/products");
  const products = (await productsRes.json()) as ProductBoxProps[];
  console.log(products);

  //! Main Order
  const orderRes = await fetch("http://localhost:3001/orders/" + slug);
  const order = (await orderRes.json()) as OrderType;
  console.log(order);

  //! orderProducts
  const orderProducts = order.cartItems.map((item) => ({
    ...products.find((prd) => prd.id === item.id),
    qty: item.qty,
  }));
  console.log(orderProducts);

  return (
    <div className="flex flex-col gap-y-6 pb-24">
      <h1 className="text-3xl text-center">your order details</h1>
      {orderProducts.map((prd) => (
        <OrderProductBox key={prd.id} {...(prd as OrderProductBoxProps)} />
      ))}

      {/* more info */}
      <div  className="text-right shadow-md border p-4 flex flex-col gap-y-1">
        <p>قیمت کل: {order.totalPrice}</p>
        <p>تخفیف: {order.discountValue}</p>
        <p>قیمت نهایی: {order.finalPrice}</p>
      </div>
    </div>
  );
}

export default OrderPage;
