const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');

const routes = require('./api/v1/routes');
require('./db');
require('./models');
require('./config/passport');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(morgan("dev"));

app.use(routes);

app.listen(3001, () => {
  console.log("Server start");
});
