const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()

// req = requisição , res = response 
route.get('/', (req, res) => res.render("index", {page : 'enter-room'}) )
route.get('/create-pass', (req,res) => res.render("index", {page : 'create-pass'}))

route.get('/room/:room', (req,res) => res.render("room"))

// Fromato que o form de dentro da modal passa a info : 
route.post('/question/:room/:question/:action',QuestionController.index)
route.post('/create-room', RoomController.create)

module.exports = route