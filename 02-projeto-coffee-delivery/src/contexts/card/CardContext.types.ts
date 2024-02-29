import { Address, Card } from "../../domains/Card";
import { CoffeeItem } from "../../domains/CoffeeItem";
import { PaymentMethod } from "../../domains/PaymentMethod";

export interface CardContextType {
  cardState: Card;
  addItemToCard: (coffee: CoffeeItem, amount: number) => void;
  removeItemFromCard: (coffee: CoffeeItem, amount: number) => void;
  setCardAddress: (address: Address) => void;
  setCardPaymentMethod: (paymentMethod: PaymentMethod) => void;
}

export interface CardContextProviderProps {
  children: React.ReactNode;
}
