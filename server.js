const express = require('express');
const app = express();
const logger = require('morgan')
const routers = require('./routes/all_routers')
require('dotenv').config();


app.set('view-engine', 'ejs');
app.use(logger('dev'))
app.use(express.json());
app.use(express.static('views'));
app.use(express.urlencoded({ extended: true }));

for (let route of Object.values(routers)) {
    app.use('/', route);
}


const port = process.env.PORT | 1234;
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});