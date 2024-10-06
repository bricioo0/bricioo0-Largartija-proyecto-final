import { createStore, combineReducers } from 'redux';


const initialProductsState = {
  products: [
    { id: 1, name: 'Camiseta de San Lorenzo', category: 'remeras', price: 90000, discount: 60000, image:"sanlorenzo.png" },
    { id: 2, name: 'Pantalon negro', category: 'pantalones', price: 50000, discount: 20000, image:"pantalon1.png"},
    { id: 3, name: 'Remera de Boca', category: 'remeras', price: 70000,  image:"boca9.png"},
    { id: 4, name: 'Boucher', category: 'remeras', price: 40000, image:"boucher29.jpeg"},
    { id: 5, name: 'Camiseta de Talleres', category: 'remeras', price: 40000,  image:"Camiseta-Talleres-5.jpg"},
    { id: 6, name: 'Camiseta de EDLP', category: 'remeras', price: 20000, image:"edlp 30.jpg"},
    { id: 7, name: 'Camiseta de Estados Unidos', category: 'remeras', price: 48300,  image:"euu27.jpg"},
    { id: 8, name: 'Camiseta de Red bull de New York', category: 'remeras', price: 70000,  image:"futbol23.jpg"},
    { id: 9, name: 'Camiseta de Holanda del 94 ', category: 'remeras', price: 90000,  image:"holanda6.jpeg"},
    { id: 10, name: 'Camiseta del Bayern leverkusen', category: 'remeras', price: 55000,  image:"leverkusen7.jpg"},
    { id: 11, name: 'Camiseta del Real Madrid manga larga', category: 'remeras', price: 34000,  image:"madrid25.jpg"},
    { id: 12, name: 'Camiseta de Olimpia de paraguay', category: 'remeras', price: 44999,  image:"olimpia8.jpg"},
    { id: 13, name: 'Remera Oversize Mars Streetwars', category: 'remeras', price: 40000,  image:"remera1.jpg"},
    { id: 14, name: 'Remera de Homero', category: 'remeras', price: 25000,  image:"remera2.jpg"},
    { id: 15, name: 'Remera Oversize Marron', category: 'remeras', price: 22000,  image:"remera3.png"},
    { id: 16, name: 'Remera las leyendas nacen', category: 'remeras', price: 20000,  image:"remera4.jpg"},
    { id: 17, name: 'Remera Over Tussy', category: 'remeras', price: 45000,  image:"remera10.png"},
    { id: 18, name: 'Remera Over Tussy', category: 'remeras', price: 45000,  image:"remera11.png"},
    { id: 19, name: 'Remera Over Tussy blanca', category: 'remeras', price: 45000,  image:"remera12.png"},
    { id: 20, name: 'Remera Tussy', category: 'remeras', price: 35000,  image:"remera13.png"},
    { id: 21, name: 'Remera Shato', category: 'remeras', price: 37000,  image:"remera14.jpg"},
    { id: 22, name: 'Remera Azul oscuro', category: 'remeras', price: 21000,  image:"remera15.jpg"},
    { id: 23, name: 'Chombita negra', category: 'remeras', price: 45000,  image:"reemera16.jpg"},
    { id: 24, name: 'Remera de Tiburon', category: 'remeras', price: 35000,  image:"remera17.jpg"},
    { id: 25, name: 'Remera Paris roja', category: 'remeras', price: 35000,  image:"remera18.jpg"},
    { id: 26, name: 'Remera Bruce Lee', category: 'remeras', price: 25000,  image:"remera19.jpg"},
    { id: 27, name: 'Remera Bronx ', category: 'remeras', price: 35000,  image:"remera20.jpeg"},
    { id: 28, name: 'Remera verde', category: 'remeras', price: 15000,  image:"remera21.jpeg"},
    { id: 29, name: 'Camiseta de Russia 2018', category: 'remeras', price: 55000,  image:"russia24.jpg"},
    { id: 30, name: 'Camiseta Blanca del united', category: 'remeras', price: 45000,  image:"united26.jpg"},
    { id: 31, name: 'Zapatilla', category: 'zapatillas', price: 25000,  image:"zapas1.png"},





    
  ],


  searchQuery:"",
};

const initialCartState = [];




function productsReducer(state = initialProductsState, action) {
  switch (action.type) {
    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.payload,  
      }
      case 'ADD_TO_CART':
        return { ...state, cart: [...state.cart, action.payload] };
    default:
      return state;
  }
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
