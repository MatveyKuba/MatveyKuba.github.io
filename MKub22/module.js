export let getNum = document.getElementById('getRes');
export function sum(x,n){
    getNum.textContent = +x.value + +n.value;
}

export function multi(x,n){
    getNum.textContent = +x.value * +n.value;
}
export function substract(x,n){
    getNum.textContent = +x.value - +n.value;
}
export function division(x,n){
    getNum.textContent = +x.value / +n.value;
}