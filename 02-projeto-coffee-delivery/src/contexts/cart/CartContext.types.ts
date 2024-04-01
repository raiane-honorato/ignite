import { Address, Cart } from "../../domains/Cart";
import { CoffeeItem } from "../../domains/CoffeeItem";
import { PaymentMethod } from "../../domains/PaymentMethod";

export interface CartContextType {
  cartState: Cart;
  addItemToCart: (coffee: CoffeeItem, amount: number) => void;
  changeItemAmountInCart: (coffee: CoffeeItem, amount: number) => void;
  setCartAddress: (address: Address) => void;
  setCartPaymentMethod: (paymentMethod: PaymentMethod) => void;
}

export interface CartContextProviderProps {
  children: React.ReactNode;
}
