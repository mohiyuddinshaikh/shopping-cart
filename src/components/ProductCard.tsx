import { Card } from "antd";
import "../styles/ProductCard.scss";
import AddToCartButton from "./AddToCartButton";
import { useState } from "react";

export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { name, price, image } = product;

  const backgroundImageUrl = "src/assets/images/shoes/shoe-placeholder.jpg";

  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <div
          className="blur-load"
          style={{
            backgroundImage: isLoaded
              ? undefined
              : `url(${backgroundImageUrl})`,
          }}
        >
          <img
            alt="example"
            src={image}
            height={320}
            width={"100%"}
            loading="lazy"
            className={`${isLoaded ? "loaded" : ""}`}
            onLoad={() => setIsLoaded(true)}
          />
        </div>
      }
      className="productCard"
    >
      <div className="cardBody">
        <div className="name">{name}</div>
        <div className="price">₹ {price}</div>
        <AddToCartButton product={product} />
      </div>
    </Card>
  );
}
