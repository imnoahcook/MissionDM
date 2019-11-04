const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');

const app = express();

// Parse post data
// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

// parse application/json
app.use(bodyParser.json());

// API Routess
app.use('/api', require('../routes/api.routes'));

// Open up and listen to port listed in config file
app.listen(
  config.port,
  console.info.bind(
    console,
    `SERVER: Launched backend on http://localhost:${config.port}`,
  ),
);
