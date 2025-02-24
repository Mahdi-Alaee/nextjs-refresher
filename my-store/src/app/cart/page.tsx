import CartContent from "@/components/CartContent";
import CartItems from "@/components/CartItems";
import Container from "@/components/Container";

function Cart() {
  return (
    <main>
      <Container className="mt-12  flex flex-col gap-y-4">
        {/* cart items */}
        <CartItems />
       
        <CartContent />
      </Container>
    </main>
  );
}

export default Cart;
