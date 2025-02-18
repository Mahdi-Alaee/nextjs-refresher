import Image from "next/image";

export interface ProductBoxProps {
  id:string;
  title: string;
  price: number;
  image: string;
}

function ProductBox({ title, image, price }: ProductBoxProps) {
  return (
    <div className="shadow-md">
      {/* product image */}
      <Image width={10000} height={10000} src={image} alt="product image" />
      {/* content */}
      <div className="p-4 text-center">
        {/* title */}
        <h2 className="text-2xl font-medium">{title}</h2>
        {/* price */}
        <p className="mt-2 text-lg">
          price: <span>{price}$</span>
        </p>
      </div>
    </div>
  );
}

export default ProductBox;
