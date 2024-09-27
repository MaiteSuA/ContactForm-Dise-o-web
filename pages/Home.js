import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>¡Bienvenido a nuestro sitio!</h1>
      <p>Por favor, navega a la página de contacto para ponerte en comunicación con nosotros.</p>
      <Link to="/Contact">
        <button>Ir a Contacto</button>
      </Link>
    </div>
  );
};

export default Home;

