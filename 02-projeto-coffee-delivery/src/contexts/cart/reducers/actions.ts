import { Address } from "../../../domains/Cart";
import { CoffeeItem } from "../../../domains/CoffeeItem";
import { PaymentMethod } from "../../../domains/PaymentMethod";
import {
  ActionTypes,
  AddItemActionProp,
  RemoveItemActionProp,
  SetAddressActionProp,
  SetPaymentMethodActionProp,
} from "./actionTypes";

export function addItem(coffee: CoffeeItem, amount: number): AddItemActionProp {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: {
      coffee,
      amount,
    },
  };
}

export function removeItem(
  coffee: CoffeeItem,
  amount: number
): RemoveItemActionProp {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      coffee,
      amount,
    },
  };
}

export function setAddress(address: Address): SetAddressActionProp {
  return {
    type: ActionTypes.SET_ADDRESS,
    payload: {
      address,
    },
  };
}

export function setPaymentMethod(
  paymentMethod: PaymentMethod
): SetPaymentMethodActionProp {
  return {
    type: ActionTypes.SET_PAYMENT_METHOD,
    payload: {
      paymentMethod,
    },
  };
}
