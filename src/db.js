import { createPool } from 'mysql2/promise'

const pool = createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'pajar_google24',
    database: 'estudiantes_db'
})

export { pool }