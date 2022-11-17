"use strict"

let subTask = document.getElementById('sub');
let subLowTask = document.getElementById('sub2');
let inpTask = document.getElementById('inpTask');
let inpLowTask = document.getElementById('inpLowTask');
let impTask = document.getElementById('impTasks')
let lowTask = document.getElementById('lowTasks');


subTask.addEventListener('click', function(){
   

    let div = document.createElement('div');
    let elemLabel = document.createElement('label');
    let elemCheck = document.createElement('check');
    let checkBox = document.createElement('input');
    let close = document.createElement('pop_up_close');
    let elemText = document.createElement('text');
    
    checkBox.className = 'rtg';
    checkBox.type = 'checkbox'
    elemCheck.className = 'check';
    elemLabel.className = 'task';
    close.className = 'pop_up_close';
    elemText.className = 'text';
    div.className = 'tasks';
    
    elemText.textContent = inpTask.value;
    close.innerHTML = '&#10006';
 

    
    elemLabel.append(checkBox);
    elemLabel.append(elemCheck);
    elemLabel.append(elemText);
    div.append(close);
    div.append(elemLabel);
    impTask.append(div);


    event.preventDefault();
        
    addTask(inpTask.value,priorities.HIGH);
    
    document.querySelectorAll('.pop_up_close').forEach((elem) => {
        elem.onclick = function() {    
            deleteTask(inpTask);
            this.parentNode.remove();
        }
    })
    
    document.querySelectorAll('.rtg').forEach((elem1) => {
            elem1.onclick = function(){
                    changeStatus(this.parentNode.childNodes[2].textContent, statuses.DONE);
                    console.log(this.parentNode.childNodes[2].innerHTML);
                }})
               
   
  
    // render();
    console.log(list)
})




subLowTask.addEventListener('click', function(){
    
    let div = document.createElement('div');
    let elemLabel = document.createElement('label');
    let elemCheck = document.createElement('check');
    let checkBox = document.createElement('input');
    let close = document.createElement('pop_up_close');
    let elemText = document.createElement('text');
    
    checkBox.className = 'rtg';
    checkBox.type = 'checkbox'
    elemCheck.className = 'check';
    elemLabel.className = 'task';
    close.className = 'pop_up_close';
    elemText.className = 'text';
    div.className = 'tasks';
    
    elemText.textContent = inpLowTask.value;
    close.innerHTML = '&#10006';
    
    elemLabel.append(checkBox);
    elemLabel.append(elemCheck);
    elemLabel.append(elemText);
    div.append(close);
    div.append(elemLabel);
    lowTask.append(div);

    event.preventDefault();
    
    addTask(inpLowTask.value,priorities.LOW);
    
    document.querySelectorAll('.pop_up_close').forEach((elem) => {
        elem.onclick = function() {    
            deleteTask(inpLowTask);
            this.parentNode.remove();
        }
    })

    document.querySelectorAll('.rtg').forEach((elem1) => {
        elem1.onclick = function(){
                changeStatus(this.parentNode.childNodes[2].textContent, statuses.DONE);
                
            }})
    // document.querySelectorAll('.rtg').forEach((elem1) => {
    //     elem1.onclick = function(){
    //         changeStatus(inpLowTask.value, statuses.DONE);
    //         console.log(list);
    //     }
    // })
    // render2();
    console.log(list);
})


function render(){

    if (list.find(item => item.priority == priorities.HIGH)){
        showCategoryHigh();
    }

}
function render2(){

    if (list.find(item => item.priority == priorities.LOW)){
        showCategoryLow();
    }

}


function showCategoryHigh(){
    let div = document.createElement('div');
    let elemLabel = document.createElement('label');
    let elemCheck = document.createElement('check');
    let checkBox = document.createElement('input');
    let close = document.createElement('pop_up_close');
    let elemText = document.createElement('text');
    
    checkBox.className = 'rtg';
    checkBox.type = 'checkbox'
    elemCheck.className = 'check';
    elemLabel.className = 'task';
    close.className = 'pop_up_close';
    elemText.className = 'text';
    div.className = 'tasks';
    
    elemText.textContent = inpTask.value;
    close.innerHTML = '&#10006';
    
    elemLabel.append(checkBox);
    elemLabel.append(elemCheck);
    elemLabel.append(elemText);
    div.append(close);
    div.append(elemLabel);
    impTask.append(div);
}
function showCategoryLow(){
    let div = document.createElement('div');
    let elemLabel = document.createElement('label');
    let elemCheck = document.createElement('check');
    let checkBox = document.createElement('input');
    let close = document.createElement('pop_up_close');
    let elemText = document.createElement('text');
    
    checkBox.className = 'rtg';
    checkBox.type = 'checkbox'
    elemCheck.className = 'check';
    elemLabel.className = 'task';
    close.className = 'pop_up_close';
    elemText.className = 'text';
    div.className = 'tasks';
    
    elemText.textContent = inpLowTask.value;
    close.innerHTML = '&#10006';
    
    elemLabel.append(checkBox);
    elemLabel.append(elemCheck);
    elemLabel.append(elemText);
    div.append(close);
    div.append(elemLabel);
    lowTask.append(div);
}




const statuses = {
    TODO : 'To Do:',
    DONE : 'Done:',
    INPR : 'In Progress:',
}
const priorities = {
    HIGH : 'High',
    LOW : 'Low',
}
const list = [
    // {name: 'make a bed', status: 'Done:', priority: "Low"},
    // {name: 'write a post', status: 'To Do:', priority: "High"},
    // {name: 'create a task', status: 'In progress:', priority: "High"},
]

let keys = {
    item1:"",
    item2:"",
    item3:"",

}

function changeStatus(elemText, newStatus) {
    if (list.find(item => item.name == elemText) === undefined) {
     console.log(`can't change "${elemText}" to "${newStatus}" cause there's no such task`);
    } else {
     list.find(item => item.name == elemText).status = statuses.DONE;
    }
 }

function deleteTask(name){
    let obj = list.map(x => {
        return x.name;
    }).indexOf(name);
    list.splice(obj, 1);
}
function addTask(newTask, prior){
    newTask ={
        name : newTask,
        status: 'To Do:',
        priority: prior,
    }
    if(!newTask) {
        console.log('Введите задачу');
    }
    list.push(newTask);
}

function showCategory(cat) {
    let str="";
    console.log(`${cat}`);
    list.forEach(function(item) {
        if (item.status === cat){
            str+="\t" + item.name +"\n";
        }
    }) 
    if (!str) {
        console.log("\t-");
    } else {console.log(str)}
}
function showList() {
    showCategory(statuses.TODO)
    showCategory(statuses.INPR)
    showCategory(statuses.DONE)
}

// deleteTask('make a bed');
// addTask('catch sone', priorities.HIGH);
// changeStatus('write a post', 'Done:');
// changeStatus('catch sone', 'Done:');
// addTask('make a shower', priorities.HIGH);
// addTask('create smth', priorities.LOW);
// changeStatus('create smth', 'In Progress:');
// deleteTask('create smth');

