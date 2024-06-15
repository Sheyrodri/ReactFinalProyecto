const express = require('express');
const db = require('./data');

const app = express();
const port = 5000;

app.use(express.json());

// Obtener todos los helados
app.get('/api/helados', (req, res) => {
  const helados = db.prepare('SELECT * FROM helados').all();
  res.json(helados);
});

// Agregar un nuevo helado
app.post('/api/helados', (req, res) => {
  const { sabor, tamaño, precio, cantidad } = req.body;
  const stmt = db.prepare('INSERT INTO helados (sabor, tamaño, precio, cantidad) VALUES (?, ?, ?, ?)');
  const result = stmt.run(sabor, tamaño, precio, cantidad);
  res.json({ id: result.lastInsertRowid, sabor, tamaño, precio, cantidad });
});

// Actualizar un helado existente
app.put('/api/helados/:id', (req, res) => {
  const { id } = req.params;
  const { sabor, tamaño, precio, cantidad } = req.body;
  const stmt = db.prepare('UPDATE helados SET sabor = ?, tamaño = ?, precio = ?, cantidad = ? WHERE id = ?');
  stmt.run(sabor, tamaño, precio, cantidad, id);
  res.json({ id, sabor, tamaño, precio, cantidad });
});

// Eliminar un helado
app.delete('/api/helados/:id', (req, res) => {
  const { id } = req.params;
  const stmt = db.prepare('DELETE FROM helados WHERE id = ?');
  stmt.run(id);
  res.json({ message: 'Helado eliminado exitosamente' });
});

app.listen(port, () => {
  console.log(`Servidor backend escuchando en http://localhost:${port}`);
});
