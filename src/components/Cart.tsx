import Header from "./Header";
import "../styles/Cart.scss";
import CartListCard from "./CartListCard";
import { useSelector } from "react-redux";
import { CartItem } from "../store/slices/cartSlice";
import { RootState } from "../store";

type Props = {};

export default function Cart({}: Props) {
  const cartItems: CartItem[] = useSelector(
    (state: RootState) => state.cart.items
  );

  return (
    <div className="cartContainer">
      <Header showCart={false} />
      <div className="listWrapper">
        <div className="titleContainer">
          <span className="title">Shopping Cart</span>
          <span className="items">({cartItems?.length} items)</span>
        </div>
        <div className="listing">
          {cartItems?.length > 0
            ? cartItems.map((cartItem, index) => (
                <CartListCard cartItem={cartItem} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
