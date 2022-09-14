var value1 = document.getElementById("inp1");
var value2 = document.getElementById("inp2");
var answer = document.getElementById("answer");
var btn = document.getElementById("btn");


btn.onclick = function () {

	var result;
	var result1;
	var res;
	var number = value1.value;
	var number1 = value2.value;
	Number(number) ;
	result = Math.pow(number, 2); 
	result1 = Math.pow(number1, 2); 
	res = result + result1;
	answer.innerHTML = Math.floor(Math.sqrt(res));
	console.log(res);


}