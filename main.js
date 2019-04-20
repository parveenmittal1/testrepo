const express = require('express') 
const app = express() 

int port = process.env.PORT;

app.get('/test1', (req, res) => {
  res.send('hello from parveen from PORT: '+port);
})


app.post('/test2', (req, res) => {

  var str = req.body.name;

  var rev = reverse(str);

  res.send('hello from parveen from PORT: '+port+"   Reverse String is   "+rev);
})

function reverse(s){
    return s.split("").reverse().join("");
}

app.listen(port)