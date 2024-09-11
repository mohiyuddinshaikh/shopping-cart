import { useDispatch } from "react-redux";
import "../styles/AddToCartButton.scss";
import { Product } from "./ProductCard";
import { addProductToCart } from "../store/slices/cartSlice";

type Props = {
  product: Product;
};

export default function AddToCartButton({ product }: Props) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addProductToCart(product));
  };

  return (
    <button className="addToCart" onClick={handleAddToCart}>
      Add to Cart
    </button>
  );
}
