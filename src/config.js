import {config} from 'dotenv';
config();

export const USER = process.env.USER || 'root';
export const PASSWORD = process.env.PASSWORD || '1234';
export const HOST = process.env.HOST || '127.0.0.1';
export const PORT = process.env.PORT || 8080;
export const DATABASE = print.env.DATABASE || 'db_estudiante';
