const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const routes = require('./api/v1');
require('./db');
require('./models');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(routes);

app.listen(3001, () => {
  console.log("Server start");
});
