import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../estructura/Footer';
import Nav from '../estructura/Nav';
import "./estilo/registrarse.css";

const Registrarse = () => {
    const [correo, setCorreo] = useState('');
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [confirmarContrasena, setConfirmarContrasena] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const [localidad, setLocalidad] = useState('');
    const [codigoPostal, setCodigoPostal] = useState('');
    const navigate = useNavigate();

    const manejarRegistro = async (e) => {
        e.preventDefault();
        
        if (contrasena !== confirmarContrasena) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        const formData = {
            email: correo,
            username: usuario,
            password: contrasena,
            phone: telefono,
            address: direccion,
            city: localidad,
            postalCode: codigoPostal
        };

        try {
            const response = await fetch('http://localhost:3000/api/registrarse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Usuario registrado con éxito.");
                navigate("/Home");
            } else {
                const errorData = await response.json();
                alert(errorData.message);
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
            alert("Error al registrar. Intente de nuevo.");
        }
    };

    return (
        <div>
            <Nav />
            <div className='container d-flex align-items-center justify-content-center gap-5 my-5 text-center'>
                <form className='w-100 m-5' onSubmit={manejarRegistro}>
                    <h3>Registrarse</h3>
                    <br />
                    <div className="mb-3">
                        <label htmlFor="correo" className="form-label">Correo electrónico</label>
                        <input type="email" className="form-control" id="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="usuario" className="form-label">Usuario</label>
                        <input type="text" className="form-control" id="usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contrasena" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="contrasena" value={contrasena} onChange={(e) => setContrasena(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmarContrasena" className="form-label">Confirmar contraseña</label>
                        <input type="password" className="form-control" id="confirmarContrasena" value={confirmarContrasena} onChange={(e) => setConfirmarContrasena(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="telefono" className="form-label">Número de teléfono</label>
                        <input type="text" className="form-control" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="direccion" className="form-label">Dirección</label>
                        <input type="text" className="form-control" id="direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="localidad" className="form-label">Localidad</label>
                        <input type="text" className="form-control" id="localidad" value={localidad} onChange={(e) => setLocalidad(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="codigoPostal" className="form-label">Código postal</label>
                        <input type="number" className="form-control" id="codigoPostal" value={codigoPostal} onChange={(e) => setCodigoPostal(e.target.value)} required />
                    </div>
                    <div className='col'>
                        <button type="submit" className='button2 px-4 py-2 rounded-pill w-100 text-light border-0'>Crear cuenta</button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Registrarse;
