import { createPool } from 'mysql2/promise'
import {DATABASE,HOST,PASSWORD,USER} from './config.js'

const pool = createPool({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE
})

export { pool }