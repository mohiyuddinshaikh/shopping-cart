import React from "react";
import { products } from "../data/Products";
import ProductCard from "./ProductCard";

type Props = {};

export default function ProductListing({}: Props) {
  return (
    <div>
      ProductListing
      {products?.map((product, index) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}
