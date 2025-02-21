import AddToCart from "@/components/AddToCart";
import Container from "@/components/Container";
import { ProductBoxProps } from "@/components/ProductBox";
import Image from "next/image";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  const res = await fetch("http://localhost:3001/products/" + id);
  const product = (await res.json()) as ProductBoxProps;

  return (
    <main>
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
              u fdhbvi bn etnb tgrnb ujternbju trnjubnr bjnrtj nboju jtrou
              jtgrjb iotrj biortj irtgjb oitrj bitrj biotrj iborj ngdib hufg grh
              urthb urtjgbu jruib jr hb
            </p>
            <p>
              price: <span>{product.price}$</span>
            </p>
            {/* add to cart */}
            <AddToCart product={product} />
          </div>
        </div>
      </Container>
    </main>
  );
}

export default ProductPage;
