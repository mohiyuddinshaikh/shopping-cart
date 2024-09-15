import { CartItem, deleteProductFromCart } from "../store/slices/cartSlice";
import "../styles/CartListCard.scss";
import Close from "../assets/images/close.svg";
import ProductQuantityControl from "./ProductQuantityControl";
import { useDispatch } from "react-redux";

type Props = {
  cartItem: CartItem;
};

export default function CartListCard({ cartItem }: Props) {
  const dispatch = useDispatch();
  const { product } = cartItem;
  const { image, name, price } = product || {};

  const handleDeleteProduct = () => {
    dispatch(deleteProductFromCart(product));
  };

  return (
    <div className="cardListCard">
      <div className="image">
        <img src={image} height="100%" width="100px" />
      </div>
      <div className="info">
        <div className="name">{name}</div>
        <div className="quantity">
          Quantity
          <div className="quantityWrap">
            <ProductQuantityControl productData={cartItem} />
          </div>
        </div>
      </div>
      <div className="price">₹ {price}</div>
      <div className="close">
        <img
          src={Close}
          height="20px"
          width="20px"
          onClick={handleDeleteProduct}
        />
      </div>
    </div>
  );
}
