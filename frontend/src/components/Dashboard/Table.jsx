import React from 'react';

const Table = ({ helados, onEdit }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Sabor</th>
          <th>Tamaño</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {helados.map((helado) => (
          <tr key={helado.id}>
            <td>{helado.sabor}</td>
            <td>{helado.tamaño}</td>
            <td>{helado.precio}</td>
            <td>{helado.cantidad}</td>
            <td>
              <button onClick={() => onEdit(helado)}>Editar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
