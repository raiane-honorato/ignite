import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart/CartContext";
import { paymentMethodDescription } from "../../domains/PaymentMethod";
import { CheckoutMain } from "./styles";

export function Checkout() {
  const { cartState } = useContext(CartContext);
  console.log("cartState", cartState);
  return (
    <CheckoutMain>
      <h2>Uhu! Pedido confirmado</h2>
      <h4>Agora é só aguardar que logo o café chegará até você</h4>

      <div className="checkout-section">
        <div className="checkout-item-container">
          <div className="icon-container">
            <MapPin size={16} weight="fill" color="white" />
          </div>
          <span className="checkout-item">
            <p>
              Entrega em{" "}
              <span className="bold">{`${cartState.address?.street}, ${cartState.address?.number}`}</span>
            </p>
            <p>{`${cartState.address?.city} - ${cartState.address?.state}`}</p>
          </span>
        </div>
        <div className="checkout-item-container">
          <div className="icon-container">
            <Timer size={16} weight="fill" color="white" />
          </div>
          <p className="checkout-item">
            Entrega em <span className="bold">20 - 30 minutos</span>
          </p>
        </div>
        {cartState.selectedPaymentMethod && (
          <div className="checkout-item-container">
            <div className="icon-container">
              <CurrencyDollar size={16} weight="fill" color="white" />
            </div>
            <span className="checkout-item">
              Pagamento na entrega
              <p className="bold">
                {paymentMethodDescription[cartState.selectedPaymentMethod]}
              </p>
            </span>
          </div>
        )}
      </div>
    </CheckoutMain>
  );
}
