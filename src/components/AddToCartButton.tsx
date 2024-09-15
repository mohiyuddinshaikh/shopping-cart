import { useDispatch, useSelector } from "react-redux";
import "../styles/AddToCartButton.scss";
import { Product } from "./ProductCard";
import { addProductToCart, CartItem } from "../store/slices/cartSlice";
import { RootState } from "../store";
import ProductQuantityControl from "./ProductQuantityControl";

type Props = {
  product: Product;
};

type AddButtonProps = {
  handleAddToCart: () => void;
};

const AddButton = ({ handleAddToCart }: AddButtonProps) => {
  return (
    <button className="addToCart" onClick={handleAddToCart}>
      Add to Cart
    </button>
  );
};

export default function AddToCartButton({ product }: Props) {
  const dispatch = useDispatch();

  const cartProducts: CartItem[] = useSelector(
    (state: RootState) => state.cart.items
  );
  const productData = cartProducts.find(
    (cartProduct) => cartProduct.product.id === product.id
  );

  const handleAddToCart = () => {
    dispatch(addProductToCart(product));
  };

  return productData?.quantity && productData?.quantity > 0 ? (
    <ProductQuantityControl productData={productData} />
  ) : (
    <AddButton handleAddToCart={handleAddToCart} />
  );
}
