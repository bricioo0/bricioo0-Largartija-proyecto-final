import { createStore, combineReducers } from 'redux';


const initialProductsState = {
  products: [
    { id: 1, name: 'Remera San Lorenzo', category: 'remeras', price: 90000, discount: 60000, image:"sanlorenzo.png" },
    { id: 2, name: 'Pantalon negro', category: 'pantalones', price: 50000, discount: 20000, image:"pantalon1.png"},
    // Otros productos..
  ],
};

const initialCartState = [];


function productsReducer(state = initialProductsState, action) {
  return state;
}


function cartReducer(state = initialCartState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});


const store = createStore(rootReducer);

export default store;
