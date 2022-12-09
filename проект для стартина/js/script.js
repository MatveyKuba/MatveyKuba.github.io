"use script"

function text(textIn){
const text = document.querySelector(".text1 p");
text.innerHTML = textIn;
text.innerHTML = text.innerText.split("   ")

text.innerHTML = text.innerText.split("").map((letter, i) =>
`<span style="transform:rotate(${i * 8.1}deg")>${letter}</span>`
)
.join(" ");
}
const text2 = document.querySelector(".text2 p");
text2.innerHTML = text2.innerText.split("   ")

text2.innerHTML = text2.innerText.split("").map((letter, i) =>
`<span style="transform:rotate(${i * 8.1}deg")>${letter}</span>`
)
.join(" ");

const text3 = document.querySelector(".text3 p");
text3.innerHTML = text3.innerText.split("   ")

text3.innerHTML = text3.innerText.split("").map((letter, i) =>
`<span style="transform:rotate(${i * 8.1}deg")>${letter}</span>`
)
.join(" ");

const text4 = document.querySelector(".text4 p");
text4.innerHTML = text4.innerText.split("   ")

text4.innerHTML = text4.innerText.split("").map((letter, i) =>
`<span style="transform:rotate(${i * 8.1}deg")>${letter}</span>`
)
.join(" ");


const text5 = document.querySelector(".text5 p");
text5.innerHTML = text5.innerText.split("   ")

text5.innerHTML = text5.innerText.split("").map((letter, i) =>
`<span style="transform:rotate(${i * 8.1}deg")>${letter}</span>`
)
.join(" ");

$('.mediPlayer').mediaPlayer();


const question = document.querySelector('.question');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');
const numberValue = document.getElementById('pop_name');
const submit = document.getElementById('submit1');
const main = document.querySelector('.main');
const mainQuestion = document.querySelector('.mainQuestion');
const red = document.querySelector('.red');
red.addEventListener('checked', function(){
    console.log('gg');
})


question.addEventListener('click', sayHi)

submit.addEventListener('click', function(e){
    e.preventDefault();
    if(document.getElementById('red').checked){
        changeWindow(numberValue.value);
    
    }
    if(document.getElementById('orange').checked){
        changeWindow(numberValue.value);
    }
    if(document.getElementById('purple').checked){
        changeWindow(numberValue.value);
    }
    if(document.getElementById('blue').checked){
        changeWindow(numberValue.value);
    }
    if(document.getElementById('green').checked){
        changeWindow(numberValue.value);
    }
})

function sayHi(e) {
        popUp.classList.add('open');
    }

    closePopUp.addEventListener('click', () => {
        popUp.classList.remove('open');
    })

function changeWindow(value){
    popUp.classList.remove('open');
    main.classList.add('none');
    mainQuestion.classList.add('active');
    let listen = document.querySelector('.listen');
    let nameOfCompit = document.querySelector('.nameOfCompit');
    switch (value){
        case "11": 
        listen.src = "1 Белые лилии.mp3";
        nameOfCompit.textContent = "Соло";
        text("Cоло Соло Соло Соло Соло Соло Соло Соло Соло");
        break;
        case "13": 
        listen.src = "1 Белые лилии.mp3";
        nameOfCompit.textContent = "Дуэт";
        text("Дуэт Дуэт Дуэт Дуэт Дуэт Дуэт Дуэт Дуэт Дуэт");
        break;
        case "14": 
        listen.src = "1 Белые лилии.mp3";
        nameOfCompit.textContent = "Команда";
        text("Команда Команда Команда Команда Команда");
        break;
        case "22": 
        listen.src = "2 Я родился.mp3";
        nameOfCompit.textContent = "Команда";
        text("Команда Команда Команда Команда Команда");
        break;
        case "23": 
        listen.src = "2 Я родился.mp3";
        nameOfCompit.textContent = "Соло";
        text("Cоло Соло Соло Соло Соло Соло Соло Соло Соло");
        break;
        case "25": 
        listen.src = "2 Я родился.mp3";
        nameOfCompit.textContent = "Дуэт";
        text("Дуэт Дуэт Дуэт Дуэт Дуэт Дуэт Дуэт Дуэт Дуэт");
        break;
        case "31": 
        listen.src = "3 Стас молодец.mp3";
        nameOfCompit.textContent = "Дуэт";
        text("Дуэт Дуэт Дуэт Дуэт Дуэт Дуэт Дуэт Дуэт Дуэт");
        break;
        case "33": 
        listen.src = "3 Стас молодец.mp3";
        nameOfCompit.textContent = "Команда";
        text("Команда Команда Команда Команда Команда");
        break;
        case "34": 
        listen.src = "3 Стас молодец.mp3";
        nameOfCompit.textContent = "Соло";
        text("Cоло Соло Соло Соло Соло Соло Соло Соло Соло");
        break;
        case "41": 
        listen.src = "4 Шиншила.mp3";
        nameOfCompit.textContent = "Команда";
        text("Команда Команда Команда Команда Команда");
        break;
        case "42": 
        listen.src = "4 Шиншила.mp3";
        nameOfCompit.textContent = "Дуэт";
        text("Дуэт Дуэт Дуэт Дуэт Дуэт Дуэт Дуэт Дуэт Дуэт");
        break;
        case "45": 
        listen.src = "4 Шиншила.mp3";
        nameOfCompit.textContent = "Соло";
        text("Cоло Соло Соло Соло Соло Соло Соло Соло Соло");
        break;
        case "52": 
        listen.src = "5 Ночные кошмары.mp3";
        nameOfCompit.textContent = "Соло";
        text("Cоло Соло Соло Соло Соло Соло Соло Соло Соло");
        break;
        case "54": 
        listen.src = "5 Ночные кошмары.mp3";
        nameOfCompit.textContent = "Дуэт";
        text("Дуэт Дуэт Дуэт Дуэт Дуэт Дуэт Дуэт Дуэт Дуэт");
        break;
        case "55": 
        listen.src = "5 Ночные кошмары.mp3";
        nameOfCompit.textContent = "Команда";
        text("Команда Команда Команда Команда Команда");
        break;
        default:
                mainQuestion.classList.remove('active');
                this.src = "ABBA - Happy New Year (minus 18).mp3";
                main.classList.remove('none');
                alert('Попробуйте заново и введите корректное число')
        break;


    }

}

document.querySelector('.listen').addEventListener('ended', function(){
    mainQuestion.classList.remove('active');
    this.src = "ABBA - Happy New Year (minus 18).mp3";
    main.classList.remove('none');
})