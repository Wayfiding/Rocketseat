const express = require('express');

const routes = express.Router()


const views = __dirname + '/views/'

const profile = {
    name:"Alberto",
    avatar:"https://avatars.githubusercontent.com/u/72744170?s=400&u=535833bf93b6ace3e529136837805390dd09a144&v=4",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day":5,
    "vaction-per-year": 4

}


// req, res
routes.get('/', (req, res)=>  res.render( views +"index"))
routes.get('/job', (req, res)=>  res.render( views +"job"))
routes.get('/job/edit', (req, res)=>  res.render( views +"job-edit"))
routes.get('/profile', (req, res)=>  res.render( views +"profile", {profile}))




module.exports = routes;