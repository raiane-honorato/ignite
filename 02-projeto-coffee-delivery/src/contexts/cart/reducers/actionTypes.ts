import { Address } from "../../../domains/Cart";
import { CoffeeItem } from "../../../domains/CoffeeItem";
import { PaymentMethod } from "../../../domains/PaymentMethod";

export enum ActionTypes {
  ADD_ITEM = "ADD_ITEM",
  CHANGE_ITEM_AMOUNT = "CHANGE_ITEM_AMOUNT",
  SET_ADDRESS = "SET_ADDRESS",
  SET_PAYMENT_METHOD = "SET_PAYMENT_METHOD",
}

interface AddItemPayload {
  coffee: CoffeeItem;
  amount: number;
}

interface ChangeItemAmountPayload {
  coffee: CoffeeItem;
  amount: number;
}

interface SetAddressPayload {
  address: Address;
}

interface SetPaymentMethodPayload {
  paymentMethod: PaymentMethod;
}

export interface AddItemActionProp {
  type: ActionTypes.ADD_ITEM;
  payload: AddItemPayload;
}

export interface ChangeItemAmountActionProp {
  type: ActionTypes.CHANGE_ITEM_AMOUNT;
  payload: ChangeItemAmountPayload;
}

export interface SetAddressActionProp {
  type: ActionTypes.SET_ADDRESS;
  payload: SetAddressPayload;
}

export interface SetPaymentMethodActionProp {
  type: ActionTypes.SET_PAYMENT_METHOD;
  payload: SetPaymentMethodPayload;
}

export type ActionProp =
  | AddItemActionProp
  | ChangeItemAmountActionProp
  | SetAddressActionProp
  | SetPaymentMethodActionProp;
