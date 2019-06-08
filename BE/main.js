const express = require('express');
const app = express();
const cors = require('cors');
const port = 4000;

app.use(cors());

app.get('/', (req, res) => res.send({text: 'Hello World!'}));

require('./actions/getImageWebsite.js')(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
