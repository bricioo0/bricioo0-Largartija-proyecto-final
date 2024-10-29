import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload); 
      }
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      const existingProduct = state.items.find(item => item.id === productId);

      if (existingProduct) {
        state.total -= existingProduct.price * existingProduct.quantity;
        state.items = state.items.filter(item => item.id !== productId);
      }
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const product = state.items.find(item => item.id === id);

      if (product) {
        state.total += (quantity - product.quantity) * product.price;
        product.quantity = quantity;
      }
    },

    emptyCart(state) {
      state.items = [];
      state.total = 0;
    },
  },
});


export const { addToCart, removeFromCart, updateQuantity, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;

