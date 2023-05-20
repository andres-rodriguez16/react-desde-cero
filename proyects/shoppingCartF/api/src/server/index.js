// server/index.js

const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const product = require('../mocks/products.json');
const PORT = process.env.PORT || 3001;

const app = express();

app.name = 'API';

app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get('/products', (req, res) => {
  res.send(product);
});

app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});
