"use strict"
const statuses = {
    TODO : 'To Do:',
    DONE : 'Done:',
    INPR : 'In Progress:',
}
// const list = {
// 	"create a new practice task": "In Progress:",
// 	"make a bed": "Done:",
// 	"write a post": "To Do:",
// };

const list = [
    {name: 'create a new practice task', status: 'In progress:', priority: "High"},
    {name: 'make a bed', status: 'Done:', priority: "Low"},
    {name: 'write a post', status: 'To Do:', priority: "High"},
]

let keys = {
    item1:"",
    item2:"",
    item3:"",

}

function changeStatus(task, status){
    if (list.filter(item => item.status != " " )) {
        list[task] = status;
}    
};

function addTask(newTask){
    if(!newTask) {
        console.log('Введите задачу');
    }
    list[newTask] = 'To Do:';
}

function deleteTask(task){
    if(task in list) {
        delete list[task];
    }

};
function showList(){
    console.log('To Do:');
    for(let key in list) {
        if (list[key] == statuses.TODO){
            console.log(`\t"${keys.item1 +=key}"`);
        } else if(keys.item1 === "") {
            console.log(`\t${keys.item1 += "-"}`);
        }
    };
    console.log('Done:');
    for(let key in list){
        if(list[key] == statuses.DONE){
            console.log(`\t"${keys.item2+=key}"`);
        } else if(keys.item2 === "") {
            console.log(`\t${keys.item2 += "-"}`);
        }
    };
    console.log('In Progress:');
    for(let key in list) {
        if (list[key] == statuses.INPR){
            console.log(`\t"${keys.item3+=key}"`);
        } else if(keys.item3 === "") {
            console.log(`\t${keys.item3 += "-"}`);
        }
    };
    // console.log(`To Do: \n\t"${keys.item1}"\nDone: \n\t"${keys.item2}"\nIn Progress:\n\t"${keys.item3}"`); //не получилось написать

};

deleteTask('make a bed');
addTask('catch sone');
changeStatus('write a post', 'Done:');
changeStatus('catch sone', 'Done:');
changeStatus('write a post','To Do:');
showList();






// let x = +prompt('x?', '');
// let n = +prompt('n?','');
 
// function add(x,n){
//     return x + n;
// }
// function multi(x,n){
//     return x * n;
// }
// function substract(x,n){
//     return x - n;
// }
// if (!isNaN(x) && !isNaN(n)) {
// switch (prompt('+,- или *')){
//         case "+":
//             function calc(x, n, func){
//             const result = func(x,n);
//             return result;
//             }        
//             alert(calc(+x,+n, add));
//         break;
//         case "-":
//              alert(calc(+x,+n, substract));
//         break;
//         case "*":
//              alert(calc(+x,+n, multi));
//             break;
//             default:
//                 alert("А что вам надо?");
// }
// }
// else{
//     alert('Это не число'); 
// }

// function firstLetter(str){        
//     if (str){
//         return str;
//     } else if (str[0] == "s") {
//         return str[0].toUpperCase() + str.slice(1);
//     }
//     else {
//     return "-"
//     } }
// function theLength(str, maxlength){
//         if (str.length > maxlength){
//             return str.slice(0, maxlength - 1)
//         }
//         else{ return str};
//     }

// function showVerticalMeesage(str){
// firstLetter();
// theLength();
// }
// console.log(showVerticalMeesage('message'));

// function showVerticalMeesage(str){
//     if(str[0] === 's') {
//         return str[0].toUpperCase() + "\n" + str[1] + "\n" + str[2] + "\n" + str[3] + "\n" + str[4] + "\n" + str[5] + "\n" + str[6];
        
//     }
//     else {
//         return str[0] + "\n" + str[1] + "\n" + str[2] + "\n" + str[3] + "\n" + str[4] + "\n" + str[5] + "\n" + str[6];
//     }
// }
// console.log(showVerticalMeesage('sessagedsadasd'));