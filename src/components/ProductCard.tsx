import React from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { id, name, price, image } = product;
  return (
    <div>
      {id} - {name} - {price} - <img src={image} height={100} width={100} />
    </div>
  );
}
