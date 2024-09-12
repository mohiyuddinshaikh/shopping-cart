import { useDispatch, useSelector } from "react-redux";
import "../styles/AddToCartButton.scss";
import { Product } from "./ProductCard";
import {
  addProductToCart,
  CartItem,
  removeProductFromCart,
} from "../store/slices/cartSlice";
import { RootState } from "../store";

type Props = {
  product: Product;
};

type AddButtonProps = {
  handleAddToCart: () => void;
};
type ProductQuantityControlProps = {
  productData: CartItem;
  handleAddToCart: () => void;
  handleRemoveFromCart: () => void;
};

const AddButton = ({ handleAddToCart }: AddButtonProps) => {
  return (
    <button className="addToCart" onClick={handleAddToCart}>
      Add to Cart
    </button>
  );
};

const ProductQuantityControl = ({
  productData,
  handleAddToCart,
  handleRemoveFromCart,
}: ProductQuantityControlProps) => {
  return (
    <div className="quantityButton">
      <div className="subtract" onClick={handleRemoveFromCart}>
        {"\u2212"}
      </div>
      <div className="display">{productData?.quantity}</div>
      <div className="add" onClick={handleAddToCart}>
        {"\u002B"}
      </div>
    </div>
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

  const handleRemoveFromCart = () => {
    dispatch(removeProductFromCart(product));
  };

  return productData?.quantity && productData?.quantity > 0 ? (
    <ProductQuantityControl
      productData={productData}
      handleAddToCart={handleAddToCart}
      handleRemoveFromCart={handleRemoveFromCart}
    />
  ) : (
    <AddButton handleAddToCart={handleAddToCart} />
  );
}
