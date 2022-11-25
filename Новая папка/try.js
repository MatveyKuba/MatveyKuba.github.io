"use strict"
const inpName = document.getElementById('inputName');
const send = document.getElementById('send');
const firstName = ""; 
const serverUrl = 'https://api.genderize.io';
const url = `${serverUrl}?name=${firstName}`;



send.addEventListener('click', function(){
    event.preventDefault();
    firstName == inpName.value;
    let response = fetch(url);
    response.onload = () => resolve(male);
    response.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${url}`));
    let male = response.json();

   promise.then(
    response => alert(`${firstName} is ${response.gender} with probability ${response.probability}`),
    error => alert(`Ошибка: ${error.message}`)
   );
})





// send.addEventListener('click', async function() {
//     event.preventDefault();
    
//     let response = await fetch(url);
//     let male = await response.json();
//         alert(`${firstName} is ${male.gender} with probability ${male.probability}`);
        
//     })


