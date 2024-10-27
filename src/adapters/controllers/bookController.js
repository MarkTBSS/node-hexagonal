import {
    createBookService,
    fetchAllBooksService,
    fetchBookByIdService,
    updateBookService
} from '../../core/services/bookService.js';

export const createBook = async (req, res) => {
    const { title, author } = req.body;
    try {
        const newBook = await createBookService(title, author);
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const fetchAllBooks = async (req, res) => {
    try {
        const books = await fetchAllBooksService();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const fetchBookById = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await fetchBookByIdService(id);
        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const fetchBookByIdQuery = async (req, res) => {
    const { id } = req.query;
    try {
        const book = await fetchBookByIdService(id);
        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateBookDetails = async (req, res) => {
    const { id } = req.params;
    const { title, author } = req.body;
    try {
        const updatedBook = await updateBookService(id, { title, author });
        if (updatedBook) {
            res.status(200).json(updatedBook);
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const replaceBookDetails = async (req, res) => {
    const { id } = req.params;
    const { title, author } = req.body;
    try {
        const updatedBook = await updateBookService(id, { title, author });
        if (updatedBook) {
            res.status(200).json(updatedBook);
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};