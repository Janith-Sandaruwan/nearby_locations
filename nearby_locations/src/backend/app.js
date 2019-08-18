const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var Client = require('node-rest-client').Client;

var client = new Client();

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json());
app.post('/getLocations',(req,res)=>{
    const typedWord = req.body.city;
    const apiKey ='';
    client.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query='+typedWord+'top+sights&key='+apiKey, function(data,response){
    res.json({msg:true,data:data})
    });
})

app.listen(3001,()=>{
    console.log("listening to port : 3001............")
})