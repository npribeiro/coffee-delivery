import { createContext, ReactNode, useEffect, useReducer } from 'react';
import { orderingReducer } from './reducer';
import {
  addProductAction,
  clearCartAction,
  removeProductAction,
  setDeliveryInfoAction,
  setProductAction,
} from './reducer/actions';
import { Cart, DeliveryInfo, PaymentMethod } from './types';

interface OrderingContextData {
  cart: Cart;
  deliveryInfo?: Partial<DeliveryInfo>;
  addProduct: (index: number, quantity: number) => void;
  setProduct: (index: number, quantity: number) => void;
  removeProduct: (index: number) => void;
  setDeliveryInfo: (deliveryInfo: Partial<DeliveryInfo>) => void;
  clearCart: () => void;
}

export const OrderingContext = createContext<OrderingContextData>(
  {} as OrderingContextData,
);

interface OrderingContextProviderProps {
  children: ReactNode;
}

const STATE_KEY = '@coffe-shop:ordering-state-1.0.0';

export function OrderingContextProvider({
  children,
}: OrderingContextProviderProps) {
  const [state, dispatch] = useReducer(orderingReducer, { cart: {} }, () => {
    const rawState = localStorage.getItem(STATE_KEY);
    if (rawState) {
      return JSON.parse(rawState);
    }
    return { cart: {} };
  });

  function addProduct(index: number, quantity: number) {
    dispatch(addProductAction(index, quantity));
  }

  function removeProduct(index: number) {
    dispatch(removeProductAction(index));
  }

  function setDeliveryInfo(deliveryInfo: Partial<DeliveryInfo>) {
    dispatch(setDeliveryInfoAction(deliveryInfo));
  }

  function setProduct(index: number, quantity: number) {
    dispatch(setProductAction(index, quantity));
  }

  useEffect(() => {
    localStorage.setItem(STATE_KEY, JSON.stringify(state));
  }, [state]);

  function clearCart() {
    dispatch(clearCartAction());
  }

  return (
    <OrderingContext.Provider
      value={{
        ...state,
        addProduct,
        removeProduct,
        setDeliveryInfo,
        setProduct,
        clearCart,
      }}
    >
      {children}
    </OrderingContext.Provider>
  );
}
