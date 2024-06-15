import React, { useState } from 'react';

const Delete = ({ helados, onDelete }) => {
  const [selectedId, setSelectedId] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/helados/${selectedId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        onDelete(selectedId);
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000);
        setSelectedId('');
      } else {
        const data = await response.json();
        console.error('Error al eliminar helado:', data.message);
      }
    } catch (error) {
      console.error('Error al eliminar helado:', error);
    }
  };

  return (
    <div>
      <select value={selectedId} onChange={(e) => setSelectedId(e.target.value)}>
        <option value="">Selecciona un helado</option>
        {helados.map((helado) => (
          <option key={helado.id} value={helado.id}>
            {helado.sabor} - {helado.tamaño}
          </option>
        ))}
      </select>
      <button onClick={handleDelete} disabled={!selectedId}>Eliminar Helado</button>
      {showPopup && <div className="popup">Helado eliminado con éxito</div>}
    </div>
  );
};

export default Delete;
