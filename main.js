const express = require('express') 
const app = express() 
const bp = require('body-parser');
var port = process.env.PORT||3000;
app.use(bp.urlencoded({extended:false}));
app.use(bp.json());


// #########################################################

var counter1=0;
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

app.post('/atgoogle',(req,res) =>{
	var array1= req.body.name;
	//var array1='Ram';
	var str='https://www.google.com/search?q='+array1+'&rlz=1C1CHBF_enIN840IN840&oq='+array1+'&aqs=chrome..69i57.1796j0j8&sourceid=chrome&ie=UTF-8';
    res.send("<script>window.open('"+str+"','_self')</script>");

})


app.get('/Youtubevideo', (req, res) => {
var url ='https://www.youtube.com/watch?v=2VUludkxZz0';

  res.send('<iframe src='+url+'></iframe>');
  
})



app.post('/arraybeauty',(req,res) =>{
	var array= req.body.name;
	//var array=[2 ,3, 4,78,5];
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
	var wordNum=0;
	var sentenseNum=0;
	var alphaNum=0;
	console.log(array)
	 for (var i = 0; i < array.length; i++) {
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
})



app.post('/changeparagraph',(req,res) =>{
	var array= req.body.name;
	var replace=req.body.replace;
	var replaceby=req.body.replaceby;
	//array='the  dog is sleeping and Dogs are kidding  dog r';
	//replace='dog';
	replaceby='<i>'+'<b>'+replaceby+'</b>'+'</i>';
	 var re = new RegExp(replace, 'g');
	var res1 = array.replace(re, replaceby);
    res.send('The resulte is '+ res1);
  //  console.log(res1)
})




app.get('/addbutton',(req,res)=>
{
	
res.send('<form action="/increaseCounter" method="post" > <input type="submit" value="Submit"> </form>');  
})





app.get('/getcounter', (req, res) => {
  res.send('Counter is :'+counter1);
})


app.post('/increaseCounter',(req,res)=>{
	counter1++;
	res.send('counter inceased')
})

app.listen(port)
