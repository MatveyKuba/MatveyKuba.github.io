"use script"


//переключение табов
const nowTable = document.getElementById('now');
const detailsTable = document.getElementById('details');
const forecastTable = document.getElementById('forecast');

const detailsBtn = document.getElementById('detailsBtn');
const detailsBtn3 = document.getElementById('detailsBtn3');

const forecastBtn = document.getElementById('forecastBtn');
const forecastBtn2 = document.getElementById('forecastBtn2');

const nowBtn = document.getElementById('nowBtn');
const nowBtn2 = document.getElementById('nowBtn2');
const nowBtn3 = document.getElementById('nowBtn3');


function changeListToDet(){
    nowTable.classList.add('none');
    forecastTable.classList.add('none');
    detailsTable.classList.add('active');
    detailsTable.classList.remove('none');
    console.log('gg');

   
}

function changeListToForecast(){
    nowTable.classList.add('none');
    detailsTable.classList.add('none');
    forecastTable.classList.add('active');
    forecastTable.classList.remove('none');
   
}

function changeListToNow() {
    forecastTable.classList.add('none');
    detailsTable.classList.add('none');
    nowTable.classList.remove('none');
    nowTable.classList.add('active');
}

detailsBtn.addEventListener('click', changeListToDet);
detailsBtn3.addEventListener('click', changeListToDet);

forecastBtn.addEventListener('click', changeListToForecast);
forecastBtn2.addEventListener('click', changeListToForecast);

nowBtn.addEventListener('click', changeListToNow);
nowBtn2.addEventListener('click', changeListToNow);
nowBtn3.addEventListener('click', changeListToNow);
//поиск города

const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const cityName = 'boston';
let inpCity = document.getElementById('inpCity');
const searchCity = document.getElementById('searchCity');


const temp = document.getElementById('temp');
const city = document.getElementById('cityCurrentName');
const imageTemp = document.querySelector('.imageTemp img');


function cityTemp (){
    let cityName = `${inpCity.value}`;
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;
    let response = fetch(url);

    response.onload = () => resolve(response);
    response.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${url}`));

    response
    .then(
    response => response.json()
    )
    .then(
    response => {
        temp.textContent = `${Math.floor(response.main.temp - 273)}°`;
        city.textContent = cityName;
        imageTemp.src = `https://openweathermap.org/img/wn/${response.weather[0]['icon']}@2x.png`
   
        
    },
    error => alert(`Ошибка: ${error.message}`)
   );
}
searchCity.addEventListener('click', function(e){
    e.preventDefault();
    cityTemp();



})
