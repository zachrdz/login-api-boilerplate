// Main starting point of application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const config = require('./config/config');

const isLocal = process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'development';
const isDev = process.env.NODE_ENV !== 'production';

// DB Setup
mongoose.connect(isLocal ? config.db_local : isDev ? config.db_dev : config.db); // Creates new database calls

// App Setup
app.use(morgan('combined')); // logging framework
app.use(bodyParser.json({type: '*/*'})); // parse incoming requests into json no matter type
router(app);

// Server Setup
const port = process.env.PORT || 3001;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);