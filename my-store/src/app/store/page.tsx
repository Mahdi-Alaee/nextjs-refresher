import Container from "@/components/Container";
import ProductBox, { ProductBoxProps } from "@/components/ProductBox";
import Link from "next/link";

async function Store() {
  const res = await fetch('http://localhost:3001/products');
  const products = await res.json();

  return (
    <main>
      <Container>
        {/* page title */}
        <h1>Store</h1>
        {/* products container */}
        <div className="grid grid-cols-4 gap-4">
          {/* product box */}
          {products.map((product: ProductBoxProps) => (
            <Link key={product.id} href={"/store/" + product.id}>
              <ProductBox {...product} />
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}

export default Store;
