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
    try{
    getNum.textContent = +x.value / +n.value;
    if(+n.value === 0){
        throw new SyntaxError('This is null, you will get the Infinity');
    }
}   catch (e){
    alert( "Dvision error " + e.message );
    return getNum;
}
}
