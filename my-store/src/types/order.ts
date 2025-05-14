export interface OrderType {
  id: string;
  cartItems: {
    id: string;
    qty: number;
  }[];
  totalPrice: number;
  discountValue: number;
  finalPrice: number;
}
