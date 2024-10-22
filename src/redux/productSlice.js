import { createSlice } from '@reduxjs/toolkit';

const initialProductsState = {
  products: [
    { id: 1, name: 'Camiseta de San Lorenzo', category: 'remeras', price: 90000, discount: 60000, stock: 0 , image:"sanlorenzo.png"},
    { id: 2, name: 'Pantalon negro', category: 'pantalones', price: 50000, discount: 20000, image:"pantalon1.png", stock: true},
    { id: 3, name: 'Remera de Boca', category: 'remeras', price: 70000, discount:50000,  image:"boca9.png", stock: true},
    { id: 4, name: 'Boucher', category: 'remeras', price: 40000, image:"boucher29.jpeg", stock: true},
    { id: 5, name: 'Camiseta de Talleres', category: 'remeras', price: 40000,  image:"Camiseta-Talleres-5.jpg", stock: true},
    { id: 6, name: 'Camiseta de EDLP', category: 'remeras', price: 20000, image:"edlp 30.jpg", stock: true},
    { id: 7, name: 'Camiseta de Estados Unidos', category: 'remeras', price: 48300,  image:"euu27.jpg", stock: true},
    { id: 8, name: 'Camiseta de Red bull de New York', category: 'remeras', price: 70000,  image:"futbol23.jpg", stock: true},
    { id: 9, name: 'Camiseta de Holanda del 94 ', category: 'remeras', price: 90000,  image:"holanda6.jpeg", stock: true},
    { id: 10, name: 'Camiseta del Bayern leverkusen', category: 'remeras', price: 55000,  image:"leverkusen7.jpg", stock: true},
    { id: 11, name: 'Camiseta del Real Madrid manga larga', category: 'remeras', price: 34000,  image:"madrid25.jpg", stock: true},
    { id: 12, name: 'Camiseta de Olimpia de paraguay', category: 'remeras', price: 44999,  image:"olimpia8.jpg", stock: true},
    { id: 13, name: 'Remera Oversize Mars Streetwars', category: 'remeras', price: 40000,  image:"remera1.jpg", stock: true},
    { id: 14, name: 'Remera de Homero', category: 'remeras', price: 25000,  image:"remera2.jpg", stock: true},
    { id: 15, name: 'Remera Oversize Marron', category: 'remeras', price: 22000,  image:"remera3.png", stock: true},
    { id: 16, name: 'Remera las leyendas nacen', category: 'remeras', price: 20000,  image:"remera4.jpg", stock: true},
    { id: 17, name: 'Remera Over Tussy', category: 'remeras', price: 45000,  image:"remera10.png", stock: true},
    { id: 18, name: 'Remera Over Tussy', category: 'remeras', price: 45000,  image:"remera11.png", stock: true},
    { id: 19, name: 'Remera Over Tussy blanca', category: 'remeras', price: 45000,  image:"remera12.png", stock: true},
    { id: 20, name: 'Remera Tussy', category: 'remeras', price: 35000,  image:"remera13.png", stock: true},
    { id: 21, name: 'Remera Shato', category: 'remeras', price: 37000,  image:"remera14.jpg", stock: true},
    { id: 22, name: 'Remera Azul oscuro', category: 'remeras', price: 21000,  image:"remera15.jpg", stock: true},
    { id: 23, name: 'Chombita negra', category: 'remeras', price: 45000,  image:"reemera16.jpg", stock: true},
    { id: 24, name: 'Remera de Tiburon', category: 'remeras', price: 35000,  image:"remera17.jpg", stock: true},
    { id: 25, name: 'Remera Paris roja', category: 'remeras', price: 35000,  image:"remera18.jpg", stock: true},
    { id: 26, name: 'Remera Bruce Lee', category: 'remeras', price: 25000,  image:"remera19.jpg", stock: true},
    { id: 27, name: 'Remera Bronx ', category: 'remeras', price: 35000,  image:"remera20.jpeg", stock: true},
    { id: 28, name: 'Remera verde', category: 'remeras', price: 15000,  image:"remera21.jpeg", stock: true},
    { id: 29, name: 'Camiseta de Russia 2018', category: 'remeras', price: 55000,  image:"russia24.jpg", stock: true},
    { id: 30, name: 'Camiseta Blanca del united', category: 'remeras', price: 45000,  image:"united26.jpg", stock: true},
    { id: 31, name: 'Zapatilla', category: 'zapatillas', price: 25000,  image:"zapas1.png", stock: true},
    {id:32, name: 'Buzo Bomber', category: 'buzos', price: 40000, image: 'buzo1.jpg' , stock: true },
    {id:33, name: 'Buzo Jeni Calavera', category: 'buzos', price: 70000, image: 'buzo2.jpg', stock: true  },
    {id:34, name: 'Buzo Adidas Black and White', category: 'buzos', price: 56000, image: 'buzo3.jpg', stock: true },
    {id:35, name: 'Buzo Canguro con capucha', category: 'buzos', price: 30000, image: 'buzo4.jpg', stock: true  },
    {id:36, name: 'Buzo under armour', category: 'buzos', price: 21000, image: 'buzo5.jpg', stock: true  },
    {id:37, name: 'campera negra con capucha', category: 'buzos', price: 15000, image: 'buzos6.jpg', stock: true  },
    {id:38, name: 'Buzo con capucha ', category: 'buzos', price: 14000, image: 'buzos7.jpg', stock: true },
    {id:39, name: 'Buzo Dioses', category: 'buzos', price: 40000, image: 'buzos8.jpg', stock: true  },
    {id:40, name: 'Buzo vieja scul', category: 'buzos', price: 31000, image: 'buzos9.jpeg', stock: true  },
    {id:41, name: 'Buzo Boca azul', category: 'buzos', price: 60000, image: 'buzos10.jpg' , stock: true },
    {id:42, name: 'Buzo Nike FLEECE', category: 'buzos', price: 65000, image: 'buzos11.jpeg', stock: true  },
    {id:43, name: 'Buzo gris not you', category: 'buzos', price: 30000, image: 'buzos12.jpg', stock: true  },
    {id:44, name: 'Buzo blanco', category: 'buzos', price: 20000, image: 'buzos13.png', stock: true },
    {id:45, name: 'Buzo gris canguro', category: 'buzos', price: 31000, image: 'buzos14.jpg', stock: true  },
    {id:46, name: 'Buzo negro trueno', category: 'buzos', price: 45000, image: 'buzos15.jpg', stock: true  },
    {id:47, name: 'Buzo negro', category: 'buzos', price: 21000, image: 'buzos16.jpeg', stock: true  },
    {id:48, name: 'Buzo emilia', category: 'buzos', price: 41000, image: 'buzos17.jpg' , stock: true },
    {id:49, name: 'Buzo chino nasa', category: 'buzos', price: 30000, image: 'buzos18.jpg', stock: true  },
    {id:50, name: 'Buzo negro estampado', category: 'buzos', price: 15000, image: 'buzos19.jpg', stock: true}, 
    {id:51, name: 'Buzo animal negro', category: 'buzos', price: 36000, image: 'buzos20.jpeg', stock: true  }, 
    {id:52, name: 'Buzo otaku', category: 'buzos', price: 29000, image: 'buzos21.jpeg', stock: true  }, 
    {id:53, name: 'Buzo dragones', category: 'buzos', price: 41000, image: 'buzos22.jpeg', stock: true  }, 
    {id:54, name: 'Buzo river blanco', category: 'buzos', price: 58000, image: 'buzos23.jpg', stock: true  }, 
    {id:55, name: 'Buzo negro simple GDO', category: 'buzos', price: 27000, image: 'buzo24.jpg', stock: true }, 
    {id:56, name: 'Buzo blanco emilia', category: 'buzos', price: 31000, image: 'buzo25.jpg', stock: true  }, 
    {id:57, name: 'Buzo Milo J', category: 'buzos', price: 35000, image: 'buzo26.jpg', stock: true  }, 
    {id:58, name: 'Campera deportiva del Dortmund', category: 'buzos', price: 35000, image: 'buzos27.jpeg', stock: true  }, 
    {id:59, name: 'Campera deportiva del R Madrid ', category: 'buzos', price: 35000, image: 'buzos28.jpeg', stock: true  }, 
    {id:60, name: 'Campera deportiva del Bayern M', category: 'buzos', price: 35000, image: 'buzos29.jpeg', stock: true  }, 
    {id:61, name: 'Campera deportiva del tottenham', category: 'buzos', price: 35000, image: 'buzos30.jpeg', stock: true  }, 
    {id:62, name: 'Campera deportiva del City', category: 'buzos', price: 35000, image: 'buzos32.jpeg', stock: true  }, 
    {id:63, name: 'Campera deportiva del Barcelona', category: 'buzos', price: 35000, image: 'buzos34.jpeg', stock: true  }, 
    {id:64, name: 'Campera deportiva de Argentina negra', category: 'buzos', price: 75000, image: 'buzos35.jpeg', stock: true  }, 
    {id:65, name: 'campera rompe viento nike', category: 'buzos', price: 25000, image: 'buzos36.jpeg', stock: true  }, 
    {id:66, name: 'Campera de Adidas verde', category: 'buzos', price: 65000, image: 'buzos37.jpeg', stock: true  }, 
    {id:67, name: 'campera de Boca Blanca', category: 'buzos', price: 70000, image: 'buzos38.jpeg' , stock: true }, 
    {id:68, name: 'Campera del Madrid', category: 'buzos', price: 52000, image: 'buzos40.jpeg', stock: true }, 
    {id:69, name: 'campera negra del cali', category: 'buzos', price: 20000, image: 'buzos41.jpeg', stock: true  }, 
    {id:70, name: 'Campera del City al cuerpo', category: 'buzos', price: 25000, image: 'buzos42.jpeg', stock: true  }, 
    {id:71, name: 'Campera Deportiva', category: 'buzos', price: 16000, image: 'buzos43.jpeg', stock: true  }, 
    {id:72, name: 'Campera negra del pincha', category: 'buzos', price: 30000, image: 'buzos44.jpeg', stock: true  }, 
    {id:73, name: 'Campera Larga del pincha', category: 'buzos', price: 40000, image: 'buzos45.jpeg', stock: true  }, 
    {id:74, name: 'Campera de estudiantes de Caseros ', category: 'buzos', price: 12000, image: 'buzos46.jpeg', stock: true  }, 
    {id:75, name: 'Camperon de Estudiantes los leales', category: 'buzos', price: 30000, image: 'buzos47.jpg', stock: true  }, 
    {id:76, name: 'buzo negro canguro', category: 'buzos', price: 21000, image: 'buzos48.jpeg', stock: true  }, 
    {id:77, name: 'Buzo gris peluche', category: 'buzos', price: 37000, image: 'buzos49.jpeg', stock: true  }, 
    {id:78, name: 'Buzo nike negro simple', category: 'buzos', price: 30000, image: 'buzos50.jpeg', stock: true  }, 
    {id:79, name: '', category: 'pantalones', price: 31000, image: '', stock: true  }, 
    {id:80, name: '', category: 'pantaloes', price: 31000, image: '' , stock: true }, 
    { id: 81, name: 'Pantalón gris', category: 'pantalones', price: 55000, image: 'pantalon2.jpg', stock: true },
  ],
  searchQuery: "",
};

const productSlice = createSlice({
  name: 'products',
  initialState: initialProductsState,
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
   
  },
});

export const { setSearchQuery } = productSlice.actions;
export default productSlice.reducer;