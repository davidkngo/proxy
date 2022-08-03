const axios = require('axios')
const express = require('express')

var app = express();

app.use(express.json()) //Notice express.json middleware

app.post('/', function(req, res){
    console.log(req.body.url);
    axios.get(req.body.url, { responseType: "stream"}).then((resp) => {
      res.pipe(resp)
    })
}); 

app.listen(process.env.PORT || 8080);