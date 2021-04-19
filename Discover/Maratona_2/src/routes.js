const express = require('express');
const routes = express.Router()
const ProfileController = require('./controllers/ProfileController')
const JobController = require('./controllers/JobController')
const DashboardController = require('./controllers/DashboardController')
const AuthController = require('./controllers/AuthController');
const RegisterController = require('./controllers/RegisterController');

// req, res
routes.get('/', AuthController.index)

routes.post('/login', AuthController.login)
routes.get('/register', RegisterController.index)
routes.post('/registered', RegisterController.register)

routes.get('/index', DashboardController.index)
routes.get('/job', JobController.create)
routes.post('/job', JobController.save)
routes.get('/job/:id', JobController.show)
routes.post('/job/:id', JobController.update)
routes.post('/job/delete/:id', JobController.delete)
routes.get('/job/edit', (req, res) => res.render("job-edit"))
routes.get('/profile', ProfileController.index)
routes.post('/profile', ProfileController.update)

module.exports = routes;