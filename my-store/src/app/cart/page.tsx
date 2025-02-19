import CartItem from "@/components/CartItem";
import Container from "@/components/Container";

function Cart() {
  return (
    <main>
      <Container className="mt-12  flex flex-col gap-y-4">
        {/* cart item */}
        <CartItem />
        <CartItem />
        <CartItem />
        <div className="shadow-md border p-4 flex flex-col gap-y-1">
          <p>
            total price: <span>74</span>$
          </p>
          <p>
            total discount: <span>74</span>$
          </p>
          <p>
            final price: <span>74</span>$
          </p>

          <div className="flex gap-x-1">
            <input
              className="p-2 border border-gray-400 rounded"
              placeholder="Enter discount code . . ."
              type="text"
            />
            <button className="bg-blue-500 text-white px-3 rounded hover:bg-blue-600">
              apply
            </button>
          </div>

          <button className="bg-green-700 text-white rounded hover:bg-green-800 mx-auto text-2xl py-3 px-6">
            continue
          </button>
        </div>
      </Container>
    </main>
  );
}

export default Cart;
