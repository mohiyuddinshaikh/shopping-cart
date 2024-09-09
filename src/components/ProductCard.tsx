import { Card } from "antd";
import "../styles/ProductCard.scss";

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
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={image} height={320} />}
      className="productCard"
    >
      <div className="cardBody">
        <div className="name">{name}</div>
        <div className="price">₹ {price}</div>
      </div>
    </Card>
  );
}
