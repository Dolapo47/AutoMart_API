import express from 'express';
// import bodyParser from 'body-parser';
// import path from 'path';
import dotenv from 'dotenv';
import { logger } from './config/logger';

const app = express();

dotenv.config();

const port = process.env.PORT || 5000;

app.get('/api/v1', (req, res) => {
  res.send({
    success: 200,
    message: 'Welcome to Auto Mart stores',
  });
});

app.listen(3000, () => {
  logger.info(`Example is running on port ${port}`);
});

module.exports = app;
