"use strict"
// function buildFun(n){
// 	let res = []
// 	for (let i = 0; i < n; i++){
// 		let fun = function(){
// 			return i;
// 		};
//     res.push(fun);
// 	}
// 	return res;
// }
// console.log(buildFun(6));

function buildFun(n){

	var res = []

	for (var i = 0; i< n; i++){
		// let j = i;
		(function(index){
      res.push(function(){
			return index;
		})
	})(i)
	}
	return res
}

function getAverage(marks){
  let res = marks.reduce((sum, current) => sum + current, 0);
  return Math.floor(res / marks.length);
}
console.log(getAverage([2,2,3,4,5]));