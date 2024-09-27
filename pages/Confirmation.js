import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Confirmation.css';

const Confirmation = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  return (
    <div className="confirmation-container">
      <h2>¡Gracias por completar el formulario!</h2>
      {formData ? (
        <div>
          <p>Nombre: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Message: {formData.message}</p>
        </div>
      ) : (
        <p>No se ha recibido ningún dato.</p>
      )}
      <Link to="/Contact">
        <button>Regresar a Contacto</button>
      </Link>
    </div>
  );
};

export default Confirmation;

