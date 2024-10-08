import React from 'react'
import "./estilo/nav.css";
import { Link } from 'react-router-dom'; 
import Logo from "../../img/logo-lagartija.png";
import Carrito from "../../img/carrito-de-compras.png";

function Nav() {
    return (
        <header>
            <nav className='h-auto d-flex justify-content-between align-items-center text-light'>
                <img className='m-2' src={Logo} width="100px" alt="Lagartija - Logo" />
                <div className="d-flex flex-column w-50 m-2">
                    <div className='mb-3'>
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                    </div>
                    <div>
                        <ul className='d-flex list-unstyled flex-row gap-4 justify-content-center'>

                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/remeras">Remeras</Link></li>
                            <li><Link to= "/buzos">Buzos</Link></li>
                            <li><Link to="/pantalones">Pantalones</Link></li>
                            <li><Link to="/zapatillas">Zapas</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='m-2'>
                    <ul className='d-flex list-unstyled flex-row gap-2'>
                    <li><Link to="/registrarse">Crear tu cuenta</Link></li>
                    <li><Link to="/acceso">Ingresar</Link></li>
                        <li><a href="/Carrito">Mis compras</a></li>
                        <li><img src={Carrito} width="25px" alt="carrito" /></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Nav;