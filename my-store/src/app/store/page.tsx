import Container from "@/components/Container";
import { ProductsList } from "@/types/product";
import ProductBox, { ProductBoxProps } from "@/components/ProductBox";
import Link from "next/link";
import Pagination from "@/components/Pagination";

interface StoreProps {
  // params: Promise<{}>;
  searchParams: Promise<{ page: string; search?: string }>;
}

async function Store({ searchParams }: StoreProps) {
  const { page, search } = await searchParams;

  const searchSearchParam = search ? `&title=${search}` : "";

  const res = await fetch(
    `http://localhost:3001/products?_page=${page ?? 1}&_per_page=1` + searchSearchParam
  );
  const data = (await res.json()) as ProductsList;
  console.log({ data });

  return (
    <main>
      <Container>
        {/* page title */}
        <h1>Store</h1>
        {/* products container */}
        <div className="grid grid-cols-4 gap-4">
          {/* product box */}
          {data.data.map((product: ProductBoxProps) => (
            <Link key={product.id} href={"/store/" + product.id}>
              <ProductBox {...product} />
            </Link>
          ))}
        </div>

        <Pagination pages={data.pages} />
      </Container>
    </main>
  );
}

export default Store;
