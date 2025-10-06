import { products } from "../data/Products";
import ProductCard from "./ProductCard";
import "../styles/ProductListing.scss";
import Header from "./Header";

export default function ProductListing() {
  return (
    <div className="listingContainer">
      <Header />
      <div className="listWrapper">
        {products?.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
}
