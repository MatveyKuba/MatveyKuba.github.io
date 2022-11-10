'use strict'
// let x = +prompt('x?', '');
// let n = +prompt('n?','');
const operations = {
    add:"+",
    multi:"*",
    substract:"-",
    division:'/',
}    

let x = document.getElementById('number1');
let n = document.getElementById('number2');
let res = document.getElementById('result');
let oper = document.querySelector('select');
let getNum = document.getElementById('getRes');


function sum(x,n){
    // return x * n;
    getNum.innerHTML = +x.value + +n.value;
}

function multi(x,n){
    // return x * n;
    getNum.innerHTML = +x.value * +n.value;
}
function substract(x,n){
    // return x - n;
    getNum.innerHTML = +x.value - +n.value;
}
function division(x,n){
    // return x - n;
    getNum.innerHTML = +x.value / +n.value;
}
// function calc(x, n, func){
//     const result = func(x,n);
//     return result;
// }    
 
res.addEventListener('click', function(){
    if ((x.value !== " " && n.value !== " ") || (x.value == String || n.value == String)) {
        switch (oper.value){
                case operations.add:
                    sum(x,n);
                break;
                case operations.substract:
                    substract(x,n)
                break;
                case operations.multi:
                    multi(x,n);
                break;
                case operations.division:
                    division(x,n)
                break;
                default:
                    alert("А что вам надо?");
        }
        }
        else{
            alert('Это не число'); 
        }
        
})



