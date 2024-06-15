import React from 'react';

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tabs">
      <button className={activeTab === 'add' ? 'active' : ''} onClick={() => setActiveTab('add')}>Agregar</button>
      <button className={activeTab === 'edit' ? 'active' : ''} onClick={() => setActiveTab('edit')}>Modificar</button>
      <button className={activeTab === 'delete' ? 'active' : ''} onClick={() => setActiveTab('delete')}>Eliminar</button>
      <button className={activeTab === 'list' ? 'active' : ''} onClick={() => setActiveTab('list')}>Listar</button>
    </div>
  );
};

export default Tabs;
