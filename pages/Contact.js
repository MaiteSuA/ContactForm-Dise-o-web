import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactForm from '../components/ContactForm'; 

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    setFormData(data);  
    navigate('/Confirmation', { state: { formData: data } }); 
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>Página de Contacto</h2>
      <ContactForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Contact;


