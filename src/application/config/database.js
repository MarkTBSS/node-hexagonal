import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

export const connectDatabase = async () => {
    try {
        const client = await pool.connect();
        return client;
    } catch (error) {
        console.error('Error connecting to the database', error.stack);
        throw error;
    }
};

export default pool;