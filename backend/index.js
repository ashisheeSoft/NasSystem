const express = require('express');
const cors = require('cors');

const app = express();
const { createFolder,listFolder,download } = require('./routes')
const bodyParser = require('body-parser')
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

const jsonParser = bodyParser.json()


app.post('/createfolder',jsonParser,createFolder);
app.get('/listitem',jsonParser,listFolder);
app.get('/download',jsonParser,download);
app.listen(5000,()=>{
    console.log('Server Started')
})