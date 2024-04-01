import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { CartContext } from "../../contexts/cart/CartContext";
import { Cart } from "../../domains/Cart";
import { CompleteOrder } from "./components/CompleteOrder/CompleteOrder";
import { SelectedCoffees } from "./components/SelectedCoffees/SelectedCoffees";
import { CartWrapper } from "./styles";
import { cartResolver } from "./utils/cartResolver";

export function CartPage() {
  const { cartState } = useContext(CartContext);

  const defaultValues = {
    address: cartState.address,
    selectedPaymentMethod: cartState.selectedPaymentMethod,
  };

  const cartForm = useForm<Omit<Cart, "selectedItems">>({
    defaultValues,
    resolver: cartResolver,
    mode: "onChange",
  });

  return (
    <CartWrapper>
      <FormProvider {...cartForm}>
        <CompleteOrder />
        <SelectedCoffees />
      </FormProvider>
    </CartWrapper>
  );
}
