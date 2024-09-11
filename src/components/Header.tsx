import "../styles/Header.scss";
import Cart from "../assets/images/cart.svg";
import { getUniqueProductCount } from "../store/slices/cartSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store/index";

type Props = {};

export default function Header({}: Props) {
  const numberOfProductsInCart = useSelector((state: RootState) =>
    getUniqueProductCount(state)
  );

  return (
    <div className="headerContainer">
      Moboots
      <div className="cartIconContainer">
        <img src={Cart} className="cart" />
        {numberOfProductsInCart > 0 ? (
          <div className="cartBadge">
            <span className="badgeText">{numberOfProductsInCart}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
