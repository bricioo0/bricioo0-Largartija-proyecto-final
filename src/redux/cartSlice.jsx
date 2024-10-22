import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existingProduct = state.items.find(item => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }

      state.total += product.price;
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

