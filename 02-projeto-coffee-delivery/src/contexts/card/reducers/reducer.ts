import { produce } from "immer";
import { Card } from "../../../domains/Card";
import {
  ActionProp,
  ActionTypes,
  AddItemActionProp,
  RemoveItemActionProp,
} from "./actionTypes";

const addNewItem = (state: Card, action: AddItemActionProp) =>
  produce(state, (draftState) => {
    const itemIndex = draftState.selectedItems.findIndex(
      (item) => item.coffee.id === action.payload.coffee.id
    );
    if (itemIndex >= 0) {
      draftState.selectedItems[itemIndex].amount += action.payload.amount;
    } else {
      draftState.selectedItems.push({
        coffee: action.payload.coffee,
        amount: action.payload.amount,
      });
    }
  });

const removeItem = (state: Card, action: RemoveItemActionProp) =>
  produce(state, (draftState) => {
    const itemIndex = draftState.selectedItems.findIndex(
      (item) => item.coffee.id === action.payload.coffee.id
    );
    if (itemIndex >= 0) {
      draftState.selectedItems[itemIndex].amount -= action.payload.amount;
      if (draftState.selectedItems[itemIndex].amount <= 0) {
        draftState.selectedItems.splice(itemIndex, 1);
      }
    }
  });

export const cardReducer = (state: Card, action: ActionProp) => {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return addNewItem(state, action);
    case ActionTypes.REMOVE_ITEM:
      return removeItem(state, action);
    case ActionTypes.SET_ADDRESS:
      return { ...state, address: action.payload.address };
    case ActionTypes.SET_PAYMENT_METHOD:
      return {
        ...state,
        selectedPaymentMethod: action.payload.paymentMethod,
      };
    default:
      return state;
  }
};
