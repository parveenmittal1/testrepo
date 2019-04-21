const express = require('express') 
const app = express() 
const bp = require('body-parser');
var port = process.env.PORT||3000;
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


app.get('/throwimage', (req, res) => {
var url ='https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001815/Alaskan-Malamute-On-White-03-400x267.jpg';

  res.send('<'+'img src='+url+'>');
})


app.get('/playvideo', (req, res) => {
var url ='https://www.youtube.com/watch?v=5gjr15aWp24';
  res.send('<'+'img src='+url+'>');
})




app.post('/arraybeauty',(req,res) =>{
	var array= req.body.name;
	 array.sort();
	 var str=''
	 for(var i=0;i<array.length;i++)
	 {
	 	str=str+'<li>'+array[i]+'</li> '
	 }
    res.send('String is : '+str);
})


app.post('/wordsumsentencesum',(req,res) =>{
	var array= req.body.name;
	//var array3="A fire that broke out in Paris’s Notre-Dame cathedral on April 15, last Monday, caused enormous damage to the over eight-centuries-old church, which is known for its religious and historical significance as well as architectural beauty. The fire — the cause is still unknown — raged through the cathedral’s lattice of huge wooden beams (known as “the forest”) and roof and brought down its famous spire. The French government has vowed to rebuild the cathedral, with pledges of support pouring in from around the world.";
	//var array= array3.split("");
	var wordNum=0;
	var sentenseNum=0;
	var alphaNum=0;
	console.log(array)
	 for (var i = 0; i < array.length; i++) {
	 //	console.log(array.length)
	 	if(array[i]==' ' || array[i]=='.' && array[i]!='-')
	 	{
	 		wordNum++;
	 		if(array[i]=='.')
	 		sentenseNum++;
	 	}
	 	 if (array[i]!=' ' && array[i]!='.')
	 	 	{alphaNum++;}

}
    res.send('alphaNum  :'+alphaNum+ 'sentenseNum :'+ sentenseNum+ 'wordNum : ' + wordNum);
    //console.log('alphaNum  :'+alphaNum+ 'sentenseNum :'+ sentenseNum+ 'wordNum : ' + wordNum)
})



app.get('/changeparagraph',(req,res) =>{
	var array= req.body.name;
	var replace=req.body.replace;
	var replaceby=req.body.replaceby;
	array='the  dog is sleeping and Dogs are kidding  dog r';
	replace='dog';
	replaceby='cat';
	 var re = new RegExp(replace, 'g');
	var res1 = array.replace(re, replaceby.bold());
    res.send('The resulte is '+ res1);
    console.log(res1)
})




app.listen(port)
