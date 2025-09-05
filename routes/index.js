const routes = require('express').Router();
const lessonController = require('../controllers/routestest.js');

routes.get('/', lessonController.stacyRoute);
routes.get('/test', lessonController.testRoute);

module.exports = routes;