import { createStore, combineReducers } from 'redux';


const initialProductsState = {
  products: [
    { id: 1, name: 'Camiseta de San Lorenzo', category: 'remeras', price: 90000, discount: 60000, image:"sanlorenzo.png" },
    { id: 2, name: 'Pantalon negro', category: 'pantalones', price: 50000, discount: 20000, image:"pantalon1.png"},
    { id: 3, name: 'Remera de Boca', category: 'remeras', price: 70000, discount:50000,  image:"boca9.png"},
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
    {id:32, name: 'Buzo Bomber', category: 'buzos', price: 40000, image: 'buzo1.jpg'  },
    {id:33, name: 'Buzo Jeni Calavera', category: 'buzos', price: 70000, image: 'buzo2.jpg'  },
    {id:34, name: 'Buzo Adidas Black and White', category: 'buzos', price: 56000, image: 'buzo3.jpg'  },
    {id:35, name: 'Buzo Canguro con capucha', category: 'buzos', price: 30000, image: 'buzo4.jpg'  },
    {id:36, name: 'Buzo under armour', category: 'buzos', price: 21000, image: 'buzo5.jpg'  },
    {id:37, name: 'campera negra con capucha', category: 'buzos', price: 15000, image: 'buzos6.jpg'  },
    {id:38, name: 'Buzo con capucha ', category: 'buzos', price: 14000, image: 'buzos7.jpg'  },
    {id:39, name: 'Buzo Dioses', category: 'buzos', price: 40000, image: 'buzos8.jpg'  },
    {id:40, name: 'Buzo vieja scul', category: 'buzos', price: 31000, image: 'buzos9.jpeg'  },
    {id:41, name: 'Buzo Boca azul', category: 'buzos', price: 60000, image: 'buzos10.jpg'  },
    {id:42, name: 'Buzo Nike FLEECE', category: 'buzos', price: 65000, image: 'buzos11.jpeg'  },
    {id:43, name: 'Buzo gris not you', category: 'buzos', price: 30000, image: 'buzos12.jpg'  },
    {id:44, name: 'Buzo blanco', category: 'buzos', price: 20000, image: 'buzos13.png'  },
    {id:45, name: 'Buzo gris canguro', category: 'buzos', price: 31000, image: 'buzos14.jpg'  },
    {id:46, name: 'Buzo negro trueno', category: 'buzos', price: 45000, image: 'buzos15.jpg'  },
    {id:47, name: 'Buzo negro', category: 'buzos', price: 21000, image: 'buzos16.jpeg'  },
    {id:48, name: 'Buzo emilia', category: 'buzos', price: 41000, image: 'buzos17.jpg'  },
    {id:49, name: 'Buzo chino nasa', category: 'buzos', price: 30000, image: 'buzos18.jpg'  },
    {id:50, name: 'Buzo negro estampado', category: 'buzos', price: 15000, image: 'buzos19.jpg'  }, 
    {id:51, name: 'Buzo animal negro', category: 'buzos', price: 36000, image: 'buzos20.jpeg'  }, 
    {id:52, name: 'Buzo otaku', category: 'buzos', price: 29000, image: 'buzos21.jpeg'  }, 
    {id:53, name: 'Buzo dragones', category: 'buzos', price: 41000, image: 'buzos22.jpeg'  }, 
    {id:54, name: 'Buzo river blanco', category: 'buzos', price: 58000, image: 'buzos23.jpg'  }, 
    {id:55, name: 'Buzo negro simple GDO', category: 'buzos', price: 27000, image: 'buzo24.jpg'  }, 
    {id:56, name: 'Buzo blanco emilia', category: 'buzos', price: 31000, image: 'buzo25.jpg'  }, 
    {id:57, name: 'Buzo Milo J', category: 'buzos', price: 35000, image: 'buzo26.jpg'  }, 
    {id:58, name: 'Campera deportiva del Dortmund', category: 'buzos', price: 35000, image: 'buzos27.jpeg'  }, 
    {id:59, name: 'Campera deportiva del R Madrid ', category: 'buzos', price: 35000, image: 'buzos28.jpeg'  }, 
    {id:60, name: 'Campera deportiva del Bayern M', category: 'buzos', price: 35000, image: 'buzos29.jpeg'  }, 
    {id:61, name: 'Campera deportiva del tottenham', category: 'buzos', price: 35000, image: 'buzos30.jpeg'  }, 
    {id:62, name: 'Campera deportiva del City', category: 'buzos', price: 35000, image: 'buzos32.jpeg'  }, 
    {id:63, name: 'Campera deportiva del Barcelona', category: 'buzos', price: 35000, image: 'buzos34.jpeg'  }, 
    {id:64, name: 'Campera deportiva de Argentina negra', category: 'buzos', price: 75000, image: 'buzos35.jpeg'  }, 
    {id:65, name: 'campera rompe viento nike', category: 'buzos', price: 25000, image: 'buzos36.jpeg'  }, 
    {id:66, name: 'Campera de Adidas verde', category: 'buzos', price: 65000, image: 'buzos37.jpeg'  }, 
    {id:67, name: 'campera de Boca Blanca', category: 'buzos', price: 70000, image: 'buzos38.jpeg'  }, 
    {id:68, name: 'Campera del Madrid', category: 'buzos', price: 52000, image: 'buzos40.jpeg'  }, 
    {id:69, name: 'campera negra del cali', category: 'buzos', price: 20000, image: 'buzos41.jpeg'  }, 
    {id:70, name: 'Campera del City al cuerpo', category: 'buzos', price: 25000, image: 'buzos42.jpeg'  }, 
    {id:71, name: 'Campera Deportiva', category: 'buzos', price: 16000, image: 'buzos43.jpeg'  }, 
    {id:72, name: 'Campera negra del pincha', category: 'buzos', price: 30000, image: 'buzos44.jpeg'  }, 
    {id:73, name: 'Campera Larga del pincha', category: 'buzos', price: 40000, image: 'buzos45.jpeg'  }, 
    {id:74, name: 'Campera de estudiantes de Caseros ', category: 'buzos', price: 12000, image: 'buzos46.jpeg'  }, 
    {id:75, name: 'Camperon de Estudiantes los leales', category: 'buzos', price: 30000, image: 'buzos47.jpg'  }, 
    {id:76, name: 'buzo negro canguro', category: 'buzos', price: 21000, image: 'buzos48.jpeg'  }, 
    {id:77, name: 'Buzo gris peluche', category: 'buzos', price: 37000, image: 'buzos49.jpeg'  }, 
    {id:78, name: 'Buzo nike negro simple', category: 'buzos', price: 30000, image: 'buzos50.jpeg'  }, 
    {id:79, name: '', category: 'pantalones', price: 31000, image: ''  }, 
    {id:80, name: '', category: 'pantaloes', price: 31000, image: ''  }, 

    






    
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
