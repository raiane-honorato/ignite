import { CoffeeItem } from "./CoffeeItem";
import { PaymentMethod } from "./PaymentMethod";

export interface CardItem {
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
}

export interface Card {
  selectedItems: Array<CardItem>;
  address?: Address;
  selectedPaymentMethod?: PaymentMethod;
}
