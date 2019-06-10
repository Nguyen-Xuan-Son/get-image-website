const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const port = 4000;

// Format json
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

// API
require('./actions/getImageWebsite.js')(app);
require('./actions/getImagesFromWebsite.js')(app);
require('./actions/getPDFFromWebsite.js')(app);

// Open server
app.listen(port, () => console.log(`Server app listening on port ${port}!`));
