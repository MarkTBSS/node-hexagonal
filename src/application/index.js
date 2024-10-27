import express from 'express';
import dotenv from 'dotenv';
import bookRoutes from '../adapters/routes/bookRoutes.js';
import { connectDatabase } from '../application/config/database.js';
import { createBooksTable } from '../application/config/tableSetup.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', bookRoutes);

connectDatabase().then(async (client) => {
    console.log('Database connected successfully');
    await createBooksTable();
    client.release();
}).catch(err => {
    console.error('Error acquiring client', err.stack);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});