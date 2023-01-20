const express = require('express');
const hbs = require('express-handlebars');

const carService = require('./services/cars');

const { about } = require('./contollers/about');
const { create } = require('./contollers/create');
const { details } = require('./contollers/details');
const { home } = require('./contollers/home');
const { notFound } = require('./contollers/notFound');

const app = express();

app.engine('hbs', hbs.create({
  extname: '.hbs'
}).engine);
app.set('view engine', '.hbs');

app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static('static'));
app.use(carService());

app.get('/', home);
app.get('/about', about);
app.get('/create', create);
app.get('/details/:id', details);

app.all('*', notFound);

app.listen(3000, () => console.log('Server is listening on port 3000...'));