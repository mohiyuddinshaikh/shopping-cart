import "../styles/Header.scss";
import Cart from "../assets/images/cart.svg";
import { getUniqueProductCount } from "../store/slices/cartSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store/index";
import { useNavigate } from "react-router-dom";

type Props = {
  showCart?: boolean;
};

export default function Header({ showCart = true }: Props) {
  const navigate = useNavigate();

  const numberOfProductsInCart = useSelector((state: RootState) =>
    getUniqueProductCount(state)
  );

  const handleOpenCart = () => {
    navigate("/cart");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div className="headerContainer">
      <div className="logo" onClick={handleLogoClick}>
        Moboots
      </div>
      {showCart ? (
        <div className="cartIconContainer" onClick={handleOpenCart}>
          <img src={Cart} className="cart" />
          {numberOfProductsInCart > 0 ? (
            <div className="cartBadge">
              <span className="badgeText">{numberOfProductsInCart}</span>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
