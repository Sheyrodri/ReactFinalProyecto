import React, { useState } from 'react';

const Edit = ({ helado, onEdit }) => {
  const [sabor, setSabor] = useState(helado.sabor);
  const [tamaño, setTamaño] = useState(helado.tamaño);
  const [precio, setPrecio] = useState(helado.precio);
  const [cantidad, setCantidad] = useState(helado.cantidad);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/helados/${helado.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sabor, tamaño, precio, cantidad }),
      });
      const data = await response.json();
      if (response.ok) {
        onEdit(data);
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000);
      } else {
        console.error('Error al modificar helado:', data.message);
      }
    } catch (error) {
      console.error('Error al modificar helado:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={sabor} onChange={(e) => setSabor(e.target.value)} required />
      <input type="text" value={tamaño} onChange={(e) => setTamaño(e.target.value)} required />
      <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
      <input type="number" value={cantidad} onChange={(e) => setCantidad(e.target.value)} required />
      <button type="submit">Guardar Cambios</button>
      {showPopup && <div className="popup">Helado modificado con éxito</div>}
    </form>
  );
};

export default Edit;
