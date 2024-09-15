import Header from "./Header";
import "../styles/Cart.scss";
import CartListCard from "./CartListCard";
import { useSelector } from "react-redux";
import { CartItem } from "../store/slices/cartSlice";
import { RootState } from "../store";
import { formatToIndianCurrency } from "../utilities/commonUtilities";

type Props = {};

export default function Cart({}: Props) {
  const cartItems: CartItem[] = useSelector(
    (state: RootState) => state.cart.items
  );

  const calculateTotalSum = (items: CartItem[]): number => {
    return items.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  };

  return (
    <div className="cartContainer">
      <Header showCart={false} />
      <div className="listWrapper">
        <div className="product">
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
        <div className="summary">
          <div className="payment">
            <div className="paymentTitle">Payment Summary</div>
            <div className="subtotal">
              <span className="title">
                Subtotal ({cartItems?.length} items)
              </span>
              <span className="value">
                ₹ {formatToIndianCurrency(calculateTotalSum(cartItems))}
              </span>
            </div>
            <div className="shipping">
              <span className="title">Shipping costs</span>
              <span className="value">₹ 500</span>
            </div>
            <div className="discount">
              <span className="title">Discount</span>
              <span className="value">-</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
