import { insertBook, getAllBooks, getBookById, updateBook } from '../../adapters/repositories/bookRepository.js';
import { sendNotification } from '../../adapters/notifications/notificationService.js';

// ฟังก์ชันสำหรับตรวจสอบข้อมูลหนังสือ
const validateBookData = (title, author) => {
    if (!title || !author) {
        throw new Error('Title and author are required');
    }
};

// ฟังก์ชันสำหรับสร้างหนังสือใหม่
export const createBookService = async (title, author) => {
    validateBookData(title, author);
    const newBook = await insertBook(title, author);
    await sendNotification(`New book created: ${newBook.title} by ${newBook.author}`);
    return newBook;
};

// ฟังก์ชันสำหรับดึงข้อมูลหนังสือทั้งหมด
export const fetchAllBooksService = async () => {
    const books = await getAllBooks();
    if (books.length === 0) {
        throw new Error('No books found');
    }
    return books;
};

// ฟังก์ชันสำหรับดึงข้อมูลหนังสือตาม ID
export const fetchBookByIdService = async (id) => {
    const book = await getBookById(id);
    if (!book) {
        throw new Error(`Book with ID ${id} not found`);
    }
    return book;
};

// ฟังก์ชันสำหรับอัปเดตข้อมูลหนังสือ
export const updateBookService = async (id, details) => {
    validateBookData(details.title, details.author);
    const updatedBook = await updateBook(id, details);
    if (!updatedBook) {
        throw new Error(`Book with ID ${id} not found`);
    }
    await sendNotification(`Book updated: ${updatedBook.title} by ${updatedBook.author}`);
    return updatedBook;
};

// ฟังก์ชันสำหรับลบหนังสือ
export const deleteBookService = async (id) => {
    const deletedBook = await deleteBook(id);
    if (!deletedBook) {
        throw new Error(`Book with ID ${id} not found`);
    }
    await sendNotification(`Book deleted: ${deletedBook.title} by ${deletedBook.author}`);
    return deletedBook;
};