import Header from "./Header";
import "../styles/Cart.scss";
import CartListCard from "./CartListCard";
import { useSelector } from "react-redux";
import { CartItem } from "../store/slices/cartSlice";
import { RootState } from "../store";
import { formatToIndianCurrency } from "../utilities/commonUtilities";
import { useNavigate } from "react-router-dom";

type Props = {};

const DISCOUNT_PRICE = 500;

export default function Cart({}: Props) {
  const navigate = useNavigate();

  const cartItems: CartItem[] = useSelector(
    (state: RootState) => state.cart.items
  );

  const calculateTotalSum = (items: CartItem[]): number => {
    return items.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  };

  const calculateFinalPrice = (items: CartItem[]): string => {
    const cartPrice = calculateTotalSum(items);
    return formatToIndianCurrency(cartPrice + DISCOUNT_PRICE);
  };

  const handleGoShopping = () => {
    navigate("/");
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
            {cartItems?.length > 0 ? (
              cartItems.map((cartItem, index) => (
                <CartListCard cartItem={cartItem} key={index} />
              ))
            ) : (
              <div className="noItems">
                <div className="text">Seems like you need some shoes!</div>
                <div className="button" onClick={handleGoShopping}>
                  Go Shopping!
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="summary">
          <div className="payment">
            <div className="paymentTitle">Payment Summary</div>
            {cartItems?.length > 0 ? (
              <>
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
                  <span className="value">₹ {DISCOUNT_PRICE}</span>
                </div>
                <div className="discount">
                  <span className="title">Discount</span>
                  <span className="value">-</span>
                </div>
                <div className="totalWrap">
                  <div className="total">
                    <span className="title">Total</span>
                    <span className="value">
                      ₹ {calculateFinalPrice(cartItems)}
                    </span>
                  </div>
                  <div className="checkout">
                    <button>Checkout</button>
                  </div>
                </div>
              </>
            ) : (
              "No summary"
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
