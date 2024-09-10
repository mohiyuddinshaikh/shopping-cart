import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../components/ProductCard";

// Define a type for each cart item
interface CartItem {
  product: Product;
  quantity: number;
}

// Define a type for the slice state
interface CartState {
  items: CartItem[];
}

// Define the initial state using that type
const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Remove an item from the cart
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item) => item.quantity !== action.payload
      );
    },
  },
});

export const { removeItem } = cartSlice.actions;

export default cartSlice.reducer;
