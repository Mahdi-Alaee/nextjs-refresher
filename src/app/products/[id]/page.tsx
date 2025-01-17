import { notFound } from "next/navigation";
import React from "react";

interface ProductProps {
  params: { id: string };
  searchParams: object;
}

function Product({ params: { id } }: ProductProps) {
  if (Number(id) > 10) notFound();

  return <div>Product {id}</div>;
}

export default Product;
