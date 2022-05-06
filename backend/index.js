const express = require('express')
const app = express();
const { createFolder } = require('./routes')
const bodyParser = require('body-parser')

const jsonParser = bodyParser.json()


app.post('/createfolder',jsonParser,createFolder);
app.listen(5000,()=>{
    console.log('Server Started')
})