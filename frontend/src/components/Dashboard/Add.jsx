import React, { useState } from 'react';

const Add = ({ onAdd }) => {
  const [sabor, setSabor] = useState('');
  const [tamaño, setTamaño] = useState('');
  const [precio, setPrecio] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/helados', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sabor, tamaño, precio, cantidad }),
      });
      const data = await response.json();
      if (response.ok) {
        onAdd(data);
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000);
        setSabor('');
        setTamaño('');
        setPrecio('');
        setCantidad('');
      } else {
        console.error('Error al agregar helado:', data.message);
      }
    } catch (error) {
      console.error('Error al agregar helado:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={sabor} onChange={(e) => setSabor(e.target.value)} placeholder="Sabor" required />
      <input type="text" value={tamaño} onChange={(e) => setTamaño(e.target.value)} placeholder="Tamaño" required />
      <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} placeholder="Precio" required />
      <input type="number" value={cantidad} onChange={(e) => setCantidad(e.target.value)} placeholder="Cantidad" required />
      <button type="submit">Agregar Helado</button>
      {showPopup && <div className="popup">Helado agregado con éxito</div>}
    </form>
  );
};

export default Add;
