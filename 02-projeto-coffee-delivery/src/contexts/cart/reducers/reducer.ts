import { produce } from "immer";
import { Cart } from "../../../domains/Cart";
import {
  ActionProp,
  ActionTypes,
  AddItemActionProp,
  ChangeItemAmountActionProp,
} from "./actionTypes";

const addNewItem = (state: Cart, action: AddItemActionProp) =>
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

const changeItemAmount = (state: Cart, action: ChangeItemAmountActionProp) =>
  produce(state, (draftState) => {
    const itemIndex = draftState.selectedItems.findIndex(
      (item) => item.coffee.id === action.payload.coffee.id
    );
    if (itemIndex >= 0) {
      draftState.selectedItems[itemIndex].amount = action.payload.amount;
      if (draftState.selectedItems[itemIndex].amount <= 0) {
        draftState.selectedItems.splice(itemIndex, 1);
      }
    }
  });

export const cartReducer = (state: Cart, action: ActionProp) => {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return addNewItem(state, action);
    case ActionTypes.CHANGE_ITEM_AMOUNT:
      return changeItemAmount(state, action);
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
