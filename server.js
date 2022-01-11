const express = require('express');
const path = require('path');
const logger = require('./api/logger');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(logger);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/routes', require('./api/routes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
