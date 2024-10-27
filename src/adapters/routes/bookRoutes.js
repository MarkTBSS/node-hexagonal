import express from 'express';
import {
    createBook,
    fetchAllBooks,
    fetchBookById,
    fetchBookByIdQuery,
    updateBookDetails,
    replaceBookDetails
} from '../controllers/bookController.js';

const router = express.Router();

router.get('/health', (request, response) => {
    response.send('V1.0');
});

router.post('/books', createBook);
router.get('/books', fetchAllBooks);
router.get('/book/:id', fetchBookById); // path variable route
router.get('/book', fetchBookByIdQuery); // query parameter route
router.patch('/book/:id', updateBookDetails);
router.put('/book/:id', replaceBookDetails);

export default router;