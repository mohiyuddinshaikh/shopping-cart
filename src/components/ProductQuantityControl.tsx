import { useDispatch } from "react-redux";
import {
  addProductToCart,
  CartItem,
  removeProductFromCart,
} from "../store/slices/cartSlice";
import "../styles/ProductQuantityControl.scss";

type ProductQuantityControlProps = {
  productData: CartItem;
};

export default function ProductQuantityControl({
  productData,
}: ProductQuantityControlProps) {
  const dispatch = useDispatch();

  const { product } = productData;

  const handleAddToCart = () => {
    dispatch(addProductToCart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeProductFromCart(product));
  };

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
}
