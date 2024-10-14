import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import Footer from '../estructura/Footer';
import Nav from '../estructura/Nav';
import { Link } from 'react-router-dom'; 
import Usuario from "../../img/usuario.png";
import "./estilo/Acceso.css";

function Acceso() {
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [mensajeError, setMensajeError] = useState("");
    
    const navigate = useNavigate(); 

    
    const manejarAcceso = async (e) => {
        e.preventDefault();
        setMensajeError(''); 
    
        try {
            const response = await fetch('http://localhost:3000/api/acceso', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: correo,
                    password: contrasena,
                }),
            });
    
            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token); 
                navigate('/Home'); 
            } else {
                const errorData = await response.json();
                setMensajeError(errorData.message);  
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
            setMensajeError("Ocurrió un error. Intenta nuevamente.");
        }
    };
    
    return (
        <div> 
            <Nav />
            <div className='d-flex align-items-center justify-content-center gap-5 my-5'>
                <div>
                    <img src={Usuario} width="150px" alt="usuario" />
                </div>
                <div>
                    <form onSubmit={manejarAcceso}>
                        <div className="mb-3">
                            <label htmlFor="correo" className="form-label">Correo electrónico</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="correo" 
                                placeholder="Email" 
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)} 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contrasena" className="form-label">Contraseña</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="contrasena" 
                                placeholder="Contraseña"
                                value={contrasena}
                                onChange={(e) => setContrasena(e.target.value)} 
                            />
                        </div>
                        {mensajeError && <p className="text-danger">{mensajeError}</p>}
                        <button type="submit" className='button1 mb-2 px-4 py-2 rounded-pill w-100 text-light border-0'>Continuar</button>
                    </form>
                    <div className='row row-cols-2'>
                        <div className='col'>
                            <Link to="/recuperar-contrasena" className="text-primary">Olvidé mi contraseña</Link>
                        </div>
                        <div className='col'>
                            <button className='button2 px-4 py-2 rounded-pill w-100 text-light border-0'>Crear cuenta</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Acceso;
