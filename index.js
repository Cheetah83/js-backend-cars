const express = require('express');
const hbs = require('express-handlebars');

const carService = require('./services/cars');

const { home } = require('./contollers/home');
const { about } = require('./contollers/about');
const create = require('./contollers/create');
const { details } = require('./contollers/details');
const editCar = require('./contollers/edit');
const deleteCar = require('./contollers/delete');

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
app.get('/details/:id', details);

app.route('/create').get(create.get).post(create.post);
app.route('/edit/:id').get(editCar.get).post(editCar.post);
app.route('/delete/:id').get(deleteCar.get).post(deleteCar.post);

app.all('*', notFound);

app.listen(3000, () => console.log('Server is listening on port 3000...'));