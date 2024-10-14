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



function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/acceso" element={<Acceso />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/recuperar-contrasena" element={<RecuperarContrasena />} />
        <Route path="/remeras" element={<Remeras />} />
        <Route path="/buzos" element={<Buzos />} />
        <Route path="/pantalones" element={<Pantalones/>} />
        <Route path="/zapatillas" element={<Zapatillas/>} />

        
        

        
      </Routes>
    </Router>
  );
}

export default App;
