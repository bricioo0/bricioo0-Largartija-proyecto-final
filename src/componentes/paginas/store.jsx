import {createsStore, combineReducers} from "redux"


const initialProductsState = [
    { id: 1, name: 'Remera de San Lorenzo', price: 60000, discount: 30000 },
    { id: 2, name: 'Pantalon negro', price: 50000, discount: 20000 },
  
]

const initialCartState = [];
const initialCommentsState = {};

const ADD_TO_CART = 'ADD_TO_CART';
const POST_COMMENT = 'POST_COMMENT';

function productsReducer(state = initialProductsState, action) {
    return state;
  }

function cartReducer (state = initialCartState, action){
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload];
            default:
                return state;

    }
}

function commentsReducer (state = initialCommentsState, action){
    switch (action.type){
    case POST_COMMENT:
        const {productId, comment } = action.payload;
        return {
            ...state,
            [productId]: [...(state[productId] || []), comment],
          };
        default:
          return state;
}
}

const rootReducers = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    commnts: commentsReducer

});
const store = createsStore(rootReducers)

export default store; 
