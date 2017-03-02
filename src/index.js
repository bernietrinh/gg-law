const config = require('../config');
const express = require('express');
// const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Express App
const app = express();

// 3rd party middleware
app.use(bodyParser.json(config.bodyParser));
app.use(cookieParser());
// app.use(cors(config.cors));

// Routes
app.use('/', require('./routes.js')());

// starting server
let server = app.listen(process.env.PORT || config.port, () => {
  console.log(`Started on port ${server.address().port}`);
});
