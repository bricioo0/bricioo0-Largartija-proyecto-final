import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Acceso from './componentes/login/Acceso';
import Registrarse from './componentes/login/Registrarse';
import Home from './componentes/paginas/Home';
import RecuperarContrasena from './componentes/login/RecuperarContrasena';
import Remeras from './componentes/paginas/Remeras';
import Buzos from './componentes/paginas/Buzos';
import Pantalones from './componentes/paginas/Pantalones';
import Zapatillas from './componentes/paginas/zapatillas';
import Carrito from  './componentes/paginas/Carrito';
import ProductManagement from './componentes/paginas/productMangament';
import Checkout from './componentes/paginas/Checkout';



function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/Home" element={<Home />} />
        <Route path="/acceso" element={<Acceso />} />
        <Route path="/" element={<Registrarse />} />
        <Route path="/recuperar-contrasena" element={<RecuperarContrasena />} />
        <Route path="/remeras" element={<Remeras />} />
        <Route path="/buzos" element={<Buzos />} />
        <Route path="/pantalones" element={<Pantalones/>} />
        <Route path="/zapatillas" element={<Zapatillas/>} />
        <Route path="/carrito" element={<Carrito/>} />
        <Route path="/productMangament" element={<ProductManagement/>} />
        <Route path="/checkout" element={<Checkout />} />

        
        

        
      </Routes>
    </Router>
  );
}

export default App;
