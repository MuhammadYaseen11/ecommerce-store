import express from 'express'; //no need to use (const express = require('express') this is old version)
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';


import Connection from './database/db.js';
import DefaultData from './default.js';
import Router from './routes/route.js'

const app = express();

dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Router);

//we use listen to create express server.
//takes two aurgumnet 1, port 2. callback function

//first aurgument
const PORT = 8000;


const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
Connection(USERNAME, PASSWORD);

//second aurgument within applisten
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

//call default function after creating server Connection();

DefaultData();
