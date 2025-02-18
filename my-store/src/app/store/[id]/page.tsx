import Container from "@/components/Container";
import { ProductBoxProps } from "@/components/ProductBox";
import Image from "next/image";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  console.log(id);

  const res = await fetch("http://localhost:3001/products/" + id);
  const product = (await res.json()) as ProductBoxProps;
  console.log(product);

  return (
    <Container className="pt-12">
      <div className="grid grid-cols-12 gap-x-4 shadow-md">
        <div className="col-span-4 bg-black">
          <div className="w-full">
            <Image
              width={10000}
              height={10000}
              src={product.image}
              alt="product Image"
            />
          </div>
        </div>
        <div className="col-span-8">
          <h2>{product.title}</h2>
          <p>
            u fdhbvi bn etnb tgrnb ujternbju trnjubnr bjnrtj nboju jtrou jtgrjb
            iotrj biortj irtgjb oitrj bitrj biotrj iborj ngdib hufg grh urthb
            urtjgbu jruib jr hb
          </p>
          <p>
            price: <span>{product.price}$</span>
          </p>
          {/* add to cart */}
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
    </Container>
  );
}

export default ProductPage;
