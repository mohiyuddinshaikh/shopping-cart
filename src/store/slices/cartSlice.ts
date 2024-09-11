import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../components/ProductCard";
import { RootState } from "..";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const existingItem = state.items.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ product, quantity: 1 });
      }
    },
    removeProductFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item) => item.quantity !== action.payload
      );
    },
  },
});

export const getUniqueProductCount = (state: RootState) => {
  return state.cart.items.length;
};

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;
