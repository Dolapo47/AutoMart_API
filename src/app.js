import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import {db} from './config/db';
import {logger} from './config/logger';
const app = express();

const dotenv = require('dotenv');
dotenv.config();



  // Test DB
  db.authenticate()
  .then(()=> logger.info('Database Connected....'))
  .catch(err => console.log("Error: "+ err));

const port = process.env.PORT || 5000;

app.get('/api/v1', (req, res)=>{
    res.json({
        success: 200,
        message: "Welcome to Auto Mart stores"
    })
});

app.listen(3000, ()=>{
    logger.info(`Example is running on port ${port}`);
})