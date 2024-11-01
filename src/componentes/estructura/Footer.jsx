import React, { useState } from 'react';
import "./estilo/footer.css";
import Logo from "../../img/logo-lagartija.png";
import { Link } from 'react-router-dom';

function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Por favor, ingresa un correo electrónico.");
      return;
    }

    try {
      const response = await fetch("https://bricioo0-largartija-proyecto-final.onrender.com//api/suscripciones", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setMessage("¡Gracias por suscribirte!");
        setEmail(''); 
      } else {
        setMessage("Hubo un error. Intenta nuevamente.");
      }
    } catch (error) {
      setMessage("Error de conexión. Intenta nuevamente.");
    }
  };

  return (
    <footer className='d-flex flex-wrap justify-content-between align-items-start text-light p-5' style={{ backgroundColor: "#333" }}>
      <div className='footer-logo'>
        <img src={Logo} width="180px" alt="Lagartija - Logo" />
        <p className='mt-3'>Descubre estilo y calidad en un solo lugar. ¡Gracias por confiar en Lagartija!</p>
      </div>

      <div className='footer-links d-flex gap-5'>
        <div>
          <h5 className="mb-3">Tienda</h5>
          <ul>
            <li><Link to="/remeras">Remeras</Link></li>
            <li><Link to="/pantalones">Pantalones</Link></li>
            <li><Link to="/zapatillas">Zapatillas</Link></li>
            <li><Link to="/buzos">Buzos</Link></li>
          </ul>
        </div>
      </div>

      <div className='footer-social'>
        <h5 className='text-center mb-3'>Síguenos en redes sociales</h5>
        <div className='d-flex gap-3 justify-content-center'>
          <a href="https://www.instagram.com/tu_instagram" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram fa-lg text-light"></i> Instagram
          </a>
          <a href="https://www.linkedin.com/in/bricio-matos-759bb628b/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin fa-lg text-light"></i> LinkedIn
          </a>
          <a href="https://x.com/briciopincha" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter fa-lg text-light"></i> Twitter
          </a>
        </div>

        <h5 className='text-center mt-4'>Suscríbete a nuestra tienda</h5>
        <input 
          className="form-control my-2" 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          aria-label="suscrib"
        />
        <button 
          className='btn btn-primary w-100 rounded-pill' 
          onClick={handleSubscribe}
        >
          Suscribirme
        </button>
        {message && <p className='mt-2 text-center'>{message}</p>}
      </div>
    </footer>
  );
}

export default Footer;

