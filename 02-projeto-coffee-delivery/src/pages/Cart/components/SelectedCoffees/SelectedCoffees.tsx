import { useContext, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../../contexts/cart/CartContext";
import { Cart } from "../../../../domains/Cart";
import { CoffeeCartItem } from "./CoffeeCartItem/CoffeeCartItem";
import { SelectedCoffeesSection } from "./styles";

const shippingRate = 3.5;

export function SelectedCoffees() {
  const {
    cartState: { selectedItems },
    setCartAddress,
    setCartPaymentMethod,
  } = useContext(CartContext);

  const { handleSubmit, formState, trigger } = useFormContext();
  const navigate = useNavigate();

  const isFormValid = formState.isValid;

  useEffect(() => {
    trigger();
  }, []);

  const totalItemsValue = selectedItems.reduce(
    (accum, item) => accum + item.amount * item.coffee.priceInReais,
    0
  );

  const getDisplayValueInReais = (value: number) =>
    value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  const onSubmit = ({
    address,
    selectedPaymentMethod,
  }: Omit<Cart, "selectedItems">) => {
    if (address) {
      setCartAddress(address);
    }

    if (selectedPaymentMethod) {
      setCartPaymentMethod(selectedPaymentMethod);
    }

    navigate("/checkout");
  };

  return (
    <SelectedCoffeesSection>
      <h2>Cafés selecionados</h2>

      <div className="cart-container">
        <ul>
          {selectedItems.map((cartItem) => (
            <>
              <CoffeeCartItem cartItem={cartItem} />
              <hr />
            </>
          ))}
        </ul>

        <div className="cart-summary">
          <span>Total de itens</span>
          <span>{getDisplayValueInReais(totalItemsValue)}</span>
          <span>Entrega</span>
          <span>{getDisplayValueInReais(shippingRate)}</span>
          <span>Total</span>
          <span>{getDisplayValueInReais(totalItemsValue + shippingRate)}</span>
        </div>

        <button
          className="submit-button"
          type="submit"
          disabled={!isFormValid}
          onClick={handleSubmit(onSubmit, (error) => {
            window.alert(
              `erro no preenchimento: ${JSON.stringify(Object.keys(error))}`
            );
          })}
        >
          Confirmar pedido
        </button>
      </div>
    </SelectedCoffeesSection>
  );
}
