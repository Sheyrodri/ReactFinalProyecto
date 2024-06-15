const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, '../helados.db');
const db = new Database(dbPath, { verbose: console.log });

db.exec(`
  CREATE TABLE IF NOT EXISTS helados (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    sabor TEXT,
    tamaño TEXT,
    precio REAL,
    cantidad INTEGER
  )
`);

module.exports = db;
