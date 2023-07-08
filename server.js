const prompts = require('./db/prompts');

const express = require('express');
const mysql = require('mysql2');

const port = process.env.port || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // TODO: Add MySQL password here
        password: 'Haachama18!',
        database: 'movies_db'
    }
)
