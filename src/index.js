module.exports = function multiply(first, second) {
  // your solution
  var firstArray = first.split('').reverse(),
  		secondArray = second.split('').reverse();
  var multiplyArray = [];
  for(var i = 0; i < secondArray.length; i++) {
  	for(var j = 0; j < firstArray.length; j++) {
  		if(i === 0) {
  			multiplyArray.push(secondArray[i] * firstArray[j]);
  		} else {
  			if(multiplyArray[i + j] === undefined) multiplyArray[i + j] = 0;
  			multiplyArray[i + j] += (secondArray[i] * firstArray[j]); 
  		}
  	}
  }

  for(var k = 0; k < multiplyArray.length; k++) {
  	if(multiplyArray[k] > 9) {
  		var ones = multiplyArray[k] % 10,
  				tens = Math.floor(multiplyArray[k] / 10);
  		multiplyArray[k] = ones;
  		if(multiplyArray[k + 1] === undefined) multiplyArray[k + 1] = 0;
  		multiplyArray[k + 1] += tens;
  	}
  }

  return multiplyArray.reverse().join('');
}
