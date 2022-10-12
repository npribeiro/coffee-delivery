import { OrderingAction, OrderingActions } from './actions';
import { produce } from 'immer';
import { Cart, DeliveryInfo } from '../types';

export type OrderingState = {
  cart: Cart;
  deliveryInfo?: Partial<DeliveryInfo>;
};

export function orderingReducer(
  state: OrderingState,
  action: OrderingAction,
): OrderingState {
  switch (action.type) {
    case OrderingActions.ADD_PRODUCT: {
      const { quantity, index } = action.payload;
      return produce(state, (draft) => {
        draft.cart[index] = quantity + (draft.cart[index] ?? 0);
      });
    }
    case OrderingActions.SET_PRODUCT: {
      const { quantity, index } = action.payload;
      return produce(state, (draft) => {
        draft.cart[index] = quantity;
      });
    }
    case OrderingActions.REMOVE_PRODUCT: {
      const { index } = action.payload;
      return produce(state, (draft) => {
        draft.cart[index] = undefined;
      });
    }
    case OrderingActions.CLEAR_CART: {
      return produce(state, (draft) => {
        draft.cart = {};
      });
    }
    case OrderingActions.SET_DELIVERY_INFO: {
      const { deliveryInfo } = action.payload;
      return produce(state, (draft) => {
        draft.deliveryInfo = deliveryInfo;
      });
    }
    default:
      return state;
  }
}
