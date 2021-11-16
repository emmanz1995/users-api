const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send({ message: 'Welcome to the Users API.' });
})

const corsOption = {
    origin: '*'
}

app.use(cors(corsOption));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Listening on PORT - ${PORT}`);
})