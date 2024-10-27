import pool from './database.js';

export const createBooksTable = async () => {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS books (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            author VARCHAR(255)
        );
    `;
    try {
        await pool.query(createTableQuery);
        console.log('Books table is ready');
    } catch (error) {
        console.error('Error creating books table', error.stack);
    }
};