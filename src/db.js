import mysql from 'mysql2';

// Configurar la conexión a la base de datos
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'pajar_google24',
  database: 'estudiantes',
});

export default pool;