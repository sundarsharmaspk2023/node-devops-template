import express from 'express';
import dotenv from 'dotenv';
import logger from './logger';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.get('/health', (req, res) => {
    logger.info('Health check hit');
    res.json({ status: 'ok', time: new Date() });
});

app.listen(port, () => {
    logger.info(`Server running on port ${port}`);
});
