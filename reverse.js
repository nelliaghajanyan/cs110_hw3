const reverse = function(arr) {
	const newarray = [];
	let a = 0;
	for(let i = (arr.length-1); i>=0; i=i-1) {
		newarray[a] = arr[i];
		a++;
	}
	return newarray;
}
	const reversedArray = reverse([1, 2, 3, 4, 5, 6, 7]);
	console.log(reversedArray);


