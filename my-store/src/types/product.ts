import { ProductBoxProps } from "@/components/ProductBox";

export interface ProductsList {
  first: number;
  last: number;
  items: number;
  pages: number;
  next: number | null;
  prev: number | null;
  data: ProductBoxProps[];
}
