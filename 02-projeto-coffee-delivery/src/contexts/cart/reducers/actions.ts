import { Address } from "../../../domains/Cart";
import { CoffeeItem } from "../../../domains/CoffeeItem";
import { PaymentMethod } from "../../../domains/PaymentMethod";
import {
  ActionTypes,
  AddItemActionProp,
  ChangeItemAmountActionProp,
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

export function changeItemAmount(
  coffee: CoffeeItem,
  amount: number
): ChangeItemAmountActionProp {
  return {
    type: ActionTypes.CHANGE_ITEM_AMOUNT,
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
