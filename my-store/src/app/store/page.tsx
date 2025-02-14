import Container from "@/components/Container";
import ProductBox from "@/components/ProductBox";
import Link from "next/link";

function Store() {
  const storeData = [
    {
      id: 1,
      title: "product title 1",
      price: 12,
      image:
        "https://img.freepik.com/free-photo/bright-neon-colors-shining-wild-chameleon_23-2151682815.jpg?semt=ais_hybrid",
    },
    {
      id: 2,
      title: "product title 2",
      price: 20,
      image:
        "https://img.freepik.com/premium-photo/mom-spending-time-with-kid-beach_23-2150924998.jpg",
    },
    {
      id: 3,
      title: "product title 3",
      price: 24,
      image:
        "https://img.freepik.com/free-photo/woman-beach-with-her-baby-enjoying-sunset_52683-144131.jpg?size=626&ext=jpg",
    },
    {
      id: 4,
      title: "product title 4",
      price: 49,
      image:
        "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    },
  ];

  return (
    <main>
      <Container>
        {/* page title */}
        <h1>Store</h1>
        {/* products container */}
        <div className="grid grid-cols-4 gap-4">
          {/* product box */}
          {storeData.map((product) => (
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
