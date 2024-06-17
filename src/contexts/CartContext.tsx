/* eslint-disable no-case-declarations */
import React, { createContext, useReducer, useContext, ReactNode } from "react";

// Define types for cart item and state
interface CartItem {
  id: string;
  name: string;
  // Add any other fields relevant to your cart item
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
}

// Define action types
type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "CLEAR_CART" };

// Create a context object with initial state
const CartContext = createContext<
  { state: CartState; dispatch: React.Dispatch<CartAction> } | undefined
>(undefined);

// Define a reducer function to handle state changes
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM":
      // Check if item already exists in cart
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        // If item exists, increment quantity
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // If item does not exist, add it to cart with quantity 1
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

// Create a provider component
export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(cartReducer, { cartItems: [] });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
