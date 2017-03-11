'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()

app.set('port', (process.env.PORT || 5000))

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// Process application/json
app.use(bodyParser.json())

// Index route
app.get('/', function (req, res) {
    res.send('Hello world,I am a chatbot')
})

// for Facebook verification
  app.get('/webhook', function (req, res) {
    if (req.query['hub.verify_token'] === 'MY_VOICE') {
      res.send(req.query['hub.challenge']);
    } else {
      res.send('Error, wrong validation token');    
    }
  });

// Spin up the server
app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'))
})