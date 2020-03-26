const express = require('express');

//Conections
const OngController = require('./Controller/OngController');
const IncidentController = require('./Controller/IncidentController');
const ProfileController = require('./Controller/ProfileController');
const SessionController = require('./Controller/SessionController');

const routes = express.Router();

// Routes
routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);


module.exports = routes;
