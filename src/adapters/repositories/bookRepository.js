import pool from '../../application/config/database.js';

export const insertBook = async (title, author) => {
    const query = 'INSERT INTO books (title, author) VALUES ($1, $2) RETURNING *';
    const values = [title, author];
    const { rows } = await pool.query(query, values);
    return rows[0];
};

export const getAllBooks = async () => {
    const query = 'SELECT * FROM books';
    const { rows } = await pool.query(query);
    return rows;
};

export const getBookById = async (id) => {
    const query = 'SELECT * FROM books WHERE id = $1';
    const values = [id];
    const { rows } = await pool.query(query, values);
    return rows[0];
};

export const updateBook = async (id, details) => {
    const { title, author } = details;
    const query = 'UPDATE books SET title = $1, author = $2 WHERE id = $3 RETURNING *';
    const values = [title, author, id];
    const { rows } = await pool.query(query, values);
    return rows[0];
};