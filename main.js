const express = require('express') 
const app = express() 
const bp = require('body-parser');
var port = process.env.PORT;
app.use(bp.urlencoded({extended:false}));
app.use(bp.json());


// #########################################################


app.get('/test1', (req, res) => {
  res.send('hello from parveen from PORT: '+port);
})

app.get('/', (req, res) => {
  res.send('Greetings from parveen from PORT: '+port);
})

var message;
app.post('/test2', (req, res) => {

  var str = req.body.name;
  message = req.body.message;
  var rev = reverse(str);

  res.send('hello from parveen from PORT: '+port+"   Reverse String is   "+rev);
})

app.get('/message', (req, res) => {
  res.send(message);
})

function reverse(s){
    return s.split("").reverse().join("");
}


//##########################################

app.post('/sumarray', (req, res) => {

  var array = req.body.name;
  var sum=0;
  for (var i = 0; i < array.length; i++) {
    sum=sum +array[i]
}

  res.send('Sum is : '+sum);
})


app.post('/concatarray',(req,res) =>{
	var array= req.body.name;
	var str='';
	 for (var i = 0; i < array.length; i++) {
    str=str +array[i]
}
    res.send('String is : '+str);
})


app.get('/test11', (req, res) => {
	var url='https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001815/Alaskan-Malamute-On-White-03-400x267.jpg'
  res.send('hello from parveen from PORT: '+ url);
})




app.listen(port)
