const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let port = process.env.PORT || 8000;


// app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '500mb' }));
app.use('/user', require('./api/controllers/user'));
app.use('/info', require('./api/controllers/info'));
app.listen(port, () => console.log('Server started on port 8000'));



app.get('/', (req, res) => {
    res.send('Hello ji');
});