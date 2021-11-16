const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const PORT = 5000;

db();

app.get('/', (req, res) => {
    res.send({ message: 'Welcome to the Users API.' });
})

const corsOption = {
    origin: '*'
}

app.use(cors(corsOption));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./model/user.model');

app.use(express.json());
app.use(require('./routes/user.route'));

app.listen(PORT, () => {
    console.log(`Listening on PORT - ${PORT}`);
})