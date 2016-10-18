const space = function(n){
    let sp = "";
	for(let i = 0; i < n; i++)
	{
	 sp = sp + " ";
	}
	return sp;
};

const stars = function(n){
	let st = "";
	for(let i = 0; i < n; i++)
	{
	 st = st + "*";
	}
	return st;
};

const diamond = function(count){

if(count%2 === 0) {
	count = count + 1;
}
	for(let i = 1; i <= count; i=i+2)
	{
		console.log(space((count-i)/2) + stars(i));
	}

	for(let i = count-2; i >= 1; i=i-2)
	{
	    console.log(space((count-i)/2) + stars(i));
	}
};
diamond(10);


