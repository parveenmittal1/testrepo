app.get('/wordsumsentencesum',(req,res) =>{
	var array1= req.body.name;
	var array="You are a dounky";
	var wordNum=0;
	var sentenseNum=0;
	var alphaNum=0;
	 for (var i = 0; i < array.length; i++) {
	 	if(array[i]==' ' || array[i]=='.')
	 	{
	 		wordNum++;
	 		if(array[i]=='.'&&arraycharCodeAt(i+1)>65&&arraycharCodeAt(i+1)<90)
	 		sentenseNum++;
	 	}
	 	 if (array[i]!=' '&& array[i]!='.')
	 	 	alphaNum++;

   
}
    res.send('alphaNum  :'+alphaNum+ 'sentenseNum :'+ sentenseNum+ 'wordNum : ' + wordNum);
    consol.log('alphaNum  :'+alphaNum+ 'sentenseNum :'+ sentenseNum+ 'wordNum : ' + wordNum)
})
