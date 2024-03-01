import { Address } from "../../../domains/Cart";
import { CoffeeItem } from "../../../domains/CoffeeItem";
import { PaymentMethod } from "../../../domains/PaymentMethod";

export enum ActionTypes {
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  SET_ADDRESS = "SET_ADDRESS",
  SET_PAYMENT_METHOD = "SET_PAYMENT_METHOD",
}

interface AddItemPayload {
  coffee: CoffeeItem;
  amount: number;
}

interface RemoveItemPayload {
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

export interface RemoveItemActionProp {
  type: ActionTypes.REMOVE_ITEM;
  payload: RemoveItemPayload;
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
  | RemoveItemActionProp
  | SetAddressActionProp
  | SetPaymentMethodActionProp;
