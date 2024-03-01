import { createContext, useEffect, useReducer } from "react";
import { Address } from "../../domains/Cart";
import { CoffeeItem } from "../../domains/CoffeeItem";
import { PaymentMethod } from "../../domains/PaymentMethod";
import { CartContextProviderProps, CartContextType } from "./CartContext.types";
import { initialCart } from "./InitialCart";
import {
  addItem,
  removeItem,
  setAddress,
  setPaymentMethod,
} from "./reducers/actions";
import { cartReducer } from "./reducers/reducer";

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

const cartStateKey = "@coffee:cart-state-1.0.0";

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    initialCart,
    (initialState) => {
      const localState = localStorage.getItem(cartStateKey);

      if (localState) {
        return JSON.parse(localState);
      }

      return initialState;
    }
  );

  useEffect(() => {
    console.log("cartState", cartState);
    const stateJSON = JSON.stringify(cartState);

    localStorage.setItem(cartStateKey, stateJSON);
  }, [cartState]);

  function addItemToCart(coffee: CoffeeItem, amount: number) {
    dispatch(addItem(coffee, amount));
  }

  function removeItemFromCart(coffee: CoffeeItem, amount: number) {
    dispatch(removeItem(coffee, amount));
  }

  function setCartAddress(address: Address) {
    dispatch(setAddress(address));
  }

  function setCartPaymentMethod(paymentMethod: PaymentMethod) {
    dispatch(setPaymentMethod(paymentMethod));
  }

  const cartContext: CartContextType = {
    cartState,
    addItemToCart,
    removeItemFromCart,
    setCartAddress,
    setCartPaymentMethod,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
