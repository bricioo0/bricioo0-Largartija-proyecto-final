import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';  // Importa el cartSlice
import productReducer from './productSlice';  // Importa el productSlice


const store = configureStore({
  reducer: {
    cart: cartReducer,          
    products: productReducer,    
  },
});

export default store;
