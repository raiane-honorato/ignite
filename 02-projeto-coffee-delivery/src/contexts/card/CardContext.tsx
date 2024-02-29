import { createContext, useReducer } from "react";
import { CardContextProviderProps, CardContextType } from "./CardContext.types";
import { cardReducer } from "./reducers/reducer";
import { initialCard } from "./InitialCard";
import { CoffeeItem } from "../../domains/CoffeeItem";
import {
  addItem,
  removeItem,
  setAddress,
  setPaymentMethod,
} from "./reducers/actions";
import { Address } from "../../domains/Card";
import { PaymentMethod } from "../../domains/PaymentMethod";

export const CardContext = createContext<CardContextType>(
  {} as CardContextType
);

export function CardContextProvider({ children }: CardContextProviderProps) {
  const [cardState, dispatch] = useReducer(cardReducer, initialCard);

  function addItemToCard(coffee: CoffeeItem, amount: number) {
    dispatch(addItem(coffee, amount));
  }

  function removeItemFromCard(coffee: CoffeeItem, amount: number) {
    dispatch(removeItem(coffee, amount));
  }

  function setCardAddress(address: Address) {
    dispatch(setAddress(address));
  }

  function setCardPaymentMethod(paymentMethod: PaymentMethod) {
    dispatch(setPaymentMethod(paymentMethod));
  }

  const cardContext: CardContextType = {
    cardState,
    addItemToCard,
    removeItemFromCard,
    setCardAddress,
    setCardPaymentMethod,
  };

  return (
    <CardContext.Provider value={cardContext}>{children}</CardContext.Provider>
  );
}
