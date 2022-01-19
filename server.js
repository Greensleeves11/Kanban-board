const express = require('express');
const path = require('path');
const logger = require('./api/middleware/logger');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/routes/category', require('./api/routes/category'));
app.use('/api/routes/counter', require('./api/routes/counter'));
app.use('/api/routes/list', require('./api/routes/list'));
app.use('/api/routes/task', require('./api/routes/task'));
app.use('/api/routes/data', require('./api/routes/data'));

app.use(logger);

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
