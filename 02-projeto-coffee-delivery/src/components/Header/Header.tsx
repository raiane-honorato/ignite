import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { CartContext } from "../../contexts/cart/CartContext";
import { useGetUserLocation } from "../../hooks/useGetUserLocation/useGetUserLocation";
import { HeaderContainer } from "./styles";

export function Header() {
  useGetUserLocation();

  const {
    cartState: { address, selectedItems },
  } = useContext(CartContext);

  const isLocationDefined = !!address?.city && !!address?.state;
  const locationText = isLocationDefined
    ? `${address?.city}, ${address?.state}`
    : "Localização não encontrada";

  const selectedItemsAmount = selectedItems.reduce(
    (accum, item) => item.amount + accum,
    0
  );

  return (
    <HeaderContainer isLocationDefined={isLocationDefined}>
      <nav>
        <h1>
          <NavLink to="/" aria-labelledby="logo">
            <img src={logo} alt="Coffee Delivery" id="logo" />
          </NavLink>
        </h1>
        <div>
          <div className="location-container">
            <MapPin size={22} weight="fill" className="map-pin" />
            <span>{locationText}</span>
          </div>
          <NavLink to="/cart" className="cart-button">
            <ShoppingCart size={22} />
            <span>{selectedItemsAmount}</span>
          </NavLink>
        </div>
      </nav>
    </HeaderContainer>
  );
}
