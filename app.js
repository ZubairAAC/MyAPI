const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let port = process.env.PORT || 8000;


app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use('/user', require('./api/controllers/user'));
app.listen(port, () => console.log('Server started on port 8000'));



app.get('/', (req, res) => {
    res.send('Hello ji');
});