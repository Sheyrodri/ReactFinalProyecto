import React, { useState, useEffect } from 'react';
import Header from './Header';
import Tabs from './Tabs';
import Add from './Add';
import Edit from './Edit';
import Delete from './Delete';
import Table from './Table';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('add');
  const [helados, setHelados] = useState([]);
  const [editingHelado, setEditingHelado] = useState(null);

  // Función para cargar la lista de helados al cargar el componente
  useEffect(() => {
    fetch('/api/helados')
      .then(response => response.json())
      .then(data => setHelados(data))
      .catch(error => console.error('Error al cargar helados:', error));
  }, []);

  // Función para agregar un nuevo helado
  const handleAddHelado = (helado) => {
    setHelados([...helados, helado]);
  };

  // Función para actualizar un helado existente
  const handleEditHelado = (helado) => {
    const updatedHelados = helados.map(item => (item.id === helado.id ? helado : item));
    setHelados(updatedHelados);
    setEditingHelado(null);
  };

  // Función para eliminar un helado
  const handleDeleteHelado = (id) => {
    const updatedHelados = helados.filter(helado => helado.id !== id);
    setHelados(updatedHelados);
  };

  return (
    <div>
      <Header />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'add' && <Add onAdd={handleAddHelado} />}
      {activeTab === 'edit' && editingHelado && <Edit helado={editingHelado} onEdit={handleEditHelado} />}
      {activeTab === 'delete' && <Delete helados={helados} onDelete={handleDeleteHelado} />}
      {activeTab === 'list' && <Table helados={helados} onEdit={setEditingHelado} />}
    </div>
  );
};

export default Dashboard;
