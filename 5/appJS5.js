const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEL = document.querySelector('#time')
const board = document.querySelector('#board')
const subBtn = document.querySelector('.submit');
let inputName = document.querySelector('.inputName');
const colors = ['#fc0fc0', '#fde910', '#ff4700', '#9696ea', '#ffefd5', '#b01030']
let time = 0
let score = 0

let storage=[];
storage.getPlayers = function(){
    return JSON.parse(localStorage.getItem('name'));
      
}
    
storage.savePlayers = function(value){
        localStorage.setItem('name', JSON.stringify(value));
}

const scoreList = storage.getPlayers();

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up');
    // let nam = localStorage.getItem('name');
    // inputName.value ===`${nam}`;
})


subBtn.addEventListener('click', (event) =>{

    event.preventDefault();
    // localStorage.setItem('name', inputName.value);
    pushNewPlayer(inputName.value);
    console.log(scoreList);
    screens[1].classList.add('up');
})

function pushNewPlayer(player){
    storage.getPlayers();
    player ={
        name : player,
        scorePoint : score,
    }
    scoreList.push(player);
    storage.savePlayers(scoreList);
}

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')){
      time = parseInt(event.target.getAttribute('data-time'))
      screens[2].classList.add('up')
      startGame()    
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createRandomCircle()
    }
})



function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)

}

function decreaseTime() {
    if (time === 0) {
    finishGame()    
    } else {
       let current = --time
       if (current < 10) {
       current = `0${current}`
    }
    setTime(current) 
    }   
}

function setTime(value) {
    timeEL.innerHTML = `00:${value}`
}

function finishGame() {
    timeEL.parentNode.classList.add('hide')
    storage.getPlayers();
    let player = scoreList.find(item => item.name = inputName.value);
    player.scorePoint = score;
    storage.savePlayers(scoreList);
    board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`
    let button = document.createElement('button');
    button.textContent = 'LB';
    button.type = "button";
    board.append(button);
    button.addEventListener('click', createLB)
 
}

function reload(){
    window.location.reload ()
}

function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(10,60)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)
    
    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    
    circle.style.background = getRandomColor()
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    
    board.append(circle)
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}
function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
 }


 
function createLB(){
    const Lboard = document.querySelector('.Lboard');
    for (let i=0; i<scoreList.length; i++){
        let li = document.createElement('li');

        li.innerHTML = scoreList[i].name;
        Lboard.append(li);

    }
    console.log(scoreList);
}