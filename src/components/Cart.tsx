import Header from "./Header";
import "../styles/Cart.scss";

type Props = {};

export default function Cart({}: Props) {
  return (
    <div className="cartContainer">
      <Header showCart={false} />
      <div className="listWrapper">Cart</div>
    </div>
  );
}
