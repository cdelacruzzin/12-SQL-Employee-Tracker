const prompts = require('./db/prompts');

const express = require('express');
const mysql = require('mysql2');

const port = process.env.DA_PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});


