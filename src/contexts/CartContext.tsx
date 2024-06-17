/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-case-declarations */
import React, {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  useEffect,
} from "react";

// Define types for cart item and state
interface CartItem {
  _id: string;
  name: string;
  quantity: number;
  imageUrl?: string;
  price: number;
}

interface CartState {
  cartItems: CartItem[];
}

// Define action types
type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "CLEAR_CART" }
  | { type: "REDUCE_ITEM"; payload: CartItem };

// Create a context object with initial state
const CartContext = createContext<
  { state: CartState; dispatch: React.Dispatch<CartAction> } | undefined
>(undefined);

// Define a reducer function to handle state changes
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );

      if (existingItem) {
        console.log("We are hre alreday");
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item._id === action.payload._id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }

    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload
        ),
      };

    case "REDUCE_ITEM":
      const existingItem2 = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem2) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item._id === action.payload._id
              ? {
                  ...item,
                  quantity: item.quantity === 1 ? 1 : item.quantity - 1,
                }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }

    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};

// Create a prov_ider component
export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(cartReducer, { cartItems: [] });

  // Initialize from localStorage on mount
  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      dispatch({ type: "CLEAR_CART" }); // Clear current state before setting from localStorage
      const parsedCartItems: CartItem[] = JSON.parse(savedCartItems);
      parsedCartItems.forEach((item) => {
        dispatch({ type: "ADD_ITEM", payload: item });
      });
    }
  }, []);

  // Save to localStorage on cartItems update
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  }, [state.cartItems]);

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
    throw new Error("useCart must be used within a CartProv_ider");
  }
  const { state, dispatch } = context;
  const totalPrice = getTotalPrice(state.cartItems);
  return { totalPrice, state, dispatch };
};

// Function to compute total price using reduce
const getTotalPrice = (cartItems: CartItem[]) => {
  return cartItems.reduce(
    (total: number, item: { price: number; quantity: number }) =>
      total + item.price * item.quantity,
    0
  );
};
