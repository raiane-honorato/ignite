import { CoffeeItem } from "./CoffeeItem";
import { PaymentMethod } from "./PaymentMethod";

export interface CartItem {
  coffee: CoffeeItem;
  amount: number;
}

export interface Address {
  street: string;
  number: string;
  additionalInfo?: string;
  city: string;
  state: string;
  postalCode: string;
  latitude?: number;
  longitude?: number;
}

export interface Cart {
  selectedItems: Array<CartItem>;
  address?: Address;
  selectedPaymentMethod?: PaymentMethod;
}
