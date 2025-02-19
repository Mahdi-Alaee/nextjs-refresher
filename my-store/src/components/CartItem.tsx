import Image from "next/image";

function CartItem() {
  return (
    <div className="grid bg-gray-100 grid-cols-12">
      {/* Image */}
      <Image
        className="col-span-2"
        src={
          "https://img.freepik.com/free-photo/bright-neon-colors-shining-wild-chameleon_23-2151682815.jpg?semt=ais_hybrid"
        }
        alt="cart image"
        width={10000}
        height={10000}
      />
      {/* content */}
      <div className="col-span-10 flex flex-col gap-y-2 p-4">
        {/* title */}
        <h2 className="text-lg font-bold">product title 1</h2>
        {/* count */}
        <p>
          count: <span>3</span>
        </p>
        {/* price */}
        <p>
          price: <span>23</span>$
        </p>

        {/* buttons */}
        <div className="flex gap-x-4 items-center">
          <button className="px-3 py-1 bg-red-500 text-white rounded text-xl">
            -
          </button>
          <span>3</span>
          <button className="px-3 py-1 bg-blue-500 text-white rounded text-xl">
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
