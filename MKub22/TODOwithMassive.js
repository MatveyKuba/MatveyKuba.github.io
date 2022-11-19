"use strict"

let subTask = document.getElementById('sub');
let subLowTask = document.getElementById('sub2');
let inpTask = document.getElementById('inpTask');
let inpLowTask = document.getElementById('inpLowTask');
let impTask = document.getElementById('impTasks')
let lowTask = document.getElementById('lowTasks');


subTask.addEventListener('click', function(){
   
    event.preventDefault();
    
    addTask(inpTask.value,priorities.HIGH);
    
    render();
    console.log(list)
})

    
    
subLowTask.addEventListener('click', function(){
    event.preventDefault();

    addTask(inpLowTask.value,priorities.LOW);
    render();    
    console.log(list);
})


function render (){
    
    impTask.textContent="";
    lowTask.textContent="";
for (let item of list) {
	if (item.priority == priorities.HIGH) {
		addHigh(item.name);
	} else if (item.priority == priorities.LOW) {
		addLow(item.name);
	}
}

}
function addHigh(task){

   
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
    close.innerHTML = '&#10006';
    
    elemText.textContent = task;
  
    elemLabel.append(checkBox);
    elemLabel.append(elemCheck);
    elemLabel.append(elemText);
    div.append(close);
    div.append(elemLabel);
    
    impTask.append(div);

    //функция удаления
//     document.querySelectorAll('.pop_up_close').forEach((elem1) => {
//         elem1.onclick = function(){
//         deleteTask(task.name);
//         render();
//     }
    
// })
    close.addEventListener('click', function(){
        deleteTask(task);
        render();
    })
    checkBox.addEventListener('click', function(){
        if(this.checked){
                    changeStatus(task, statuses.DONE);
                }
            else if(!this.checked){
                changeStatus(task, statuses.TODO);
                console.log('gg');
            }
    })
    
    // document.querySelectorAll('.rtg').forEach((elem1) => {
       
    // elem1.onclick = function(){
    //         if(this.checked){
    //         changeStatus(this.parentNode.childNodes[2].textContent, statuses.DONE);
    //     }
    // else if(!this.checked){
    //     changeStatus(this.parentNode.childNodes[2].textContent, statuses.TODO);
    //     console.log('gg');
    // }
    // }})

        
    
}

function addLow(task){

   
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
    close.innerHTML = '&#10006';
    
    elemText.textContent = task;
  
    elemLabel.append(checkBox);
    elemLabel.append(elemCheck);
    elemLabel.append(elemText);
    div.append(close);
    div.append(elemLabel);
    
    lowTask.append(div);

    //функция удаления
//     document.querySelectorAll('.pop_up_close').forEach((elem1) => {
//         elem1.onclick = function(){
//         deleteTask(task.name);
//         render();
//     }
    
// })
close.addEventListener('click', function(){
    deleteTask(task);
    render();
})
checkBox.addEventListener('click', function(){
    if(this.checked){
                changeStatus(this.parentNode.childNodes[2].textContent, statuses.DONE);
            }
        else if(!this.checked){
            changeStatus(this.parentNode.childNodes[2].textContent, statuses.TODO);
            console.log('gg');
        }
})
    
    // document.querySelectorAll('.rtg').forEach((elem1) => {
       
    // elem1.onclick = function(){
    //         if(this.checked){
    //         changeStatus(this.parentNode.childNodes[2].textContent, statuses.DONE);
    //     }
    // else if(!this.checked){
    //     changeStatus(this.parentNode.childNodes[2].textContent, statuses.TODO);
    //     console.log('gg');
    // }
    // }})

        
    
}

function addLow2(){
    lowTask.textContent="";
    for (let task of list){
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
    close.innerHTML = '&#10006';
    
    elemText.textContent = task.name;
    console.log( task.name);
  
    elemLabel.append(checkBox);
    elemLabel.append(elemCheck);
    elemLabel.append(elemText);
    div.append(close);
    div.append(elemLabel);
    
    lowTask.append(div);

    document.querySelectorAll('.rtg').forEach((elem1) => {
       
        elem1.onclick = function(){
            if(this.checked){
            changeStatus(this.parentNode.childNodes[2].textContent, statuses.DONE);
            
        }
    else if(!this.checked){
        changeStatus(this.parentNode.childNodes[2].textContent, statuses.TODO);
        console.log('gg');
    }
    }})
}
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
     list.find(item => item.name == elemText).status = newStatus;
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

