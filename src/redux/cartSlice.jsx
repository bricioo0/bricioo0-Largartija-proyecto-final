import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity = action.payload.quantity;
      }
    },
    emptyCart(state) {
      state.items = [];
      state.total = 0;
    },
   
    updateSize: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.talla = action.payload.size; 
      }
    },
  },
});

// Exporta las acciones
export const { addToCart, removeFromCart, updateQuantity, updateSize, emptyCart } = cartSlice.actions;

// Exporta el reducer
export default cartSlice.reducer;




















