import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Acceso from './componentes/login/Acceso';
import Registrarse from './componentes/login/Registrarse';
import Home from './componentes/paginas/Home';
import RecuperarContrasena from './componentes/login/RecuperarContrasena';
import Remeras from './componentes/paginas/Remeras';
import Buzos from './componentes/paginas/Buzos';



function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/home" element={<Home />} />
        <Route path="/acceso" element={<Acceso />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/recuperar-contrasena" element={<RecuperarContrasena />} />
        <Route path="/remeras" element={<Remeras />} />
        <Route path="/buzos" element={<Buzos />} />
        

        
      </Routes>
    </Router>
  );
}

export default App;
