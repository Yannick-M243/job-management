require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const helmet = require("helmet");
const port = process.env.PORT || 8080;
const cors = require('cors');
const api = require('./routes/api');
const con = require('./dbConnection.js');

app.use(bodyParser.json());
app.use(helmet());

con.connection();//establishing connection to the database

//linking the /api parameter to its route file
app.use('/api', api);

app.listen(port, () => console.log('Server is running on port ' + port));

