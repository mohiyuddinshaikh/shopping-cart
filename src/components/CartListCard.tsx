import { CartItem } from "../store/slices/cartSlice";
import "../styles/CartListCard.scss";
import Close from "../assets/images/close.svg";

type Props = {
  cartItem: CartItem;
};

export default function CartListCard({ cartItem }: Props) {
  const { product, quantity } = cartItem;
  const { image, name, price } = product || {};

  return (
    <div className="cardListCard">
      <div className="image">
        <img src={image} height="100%" width="100px" />
      </div>
      <div className="info">
        <div className="name">{name}</div>
        <div className="quantity">Qty: {quantity}</div>
      </div>
      <div className="price">₹ {price}</div>
      <div className="close">
        <img src={Close} height="20px" width="20px" />
      </div>
    </div>
  );
}
