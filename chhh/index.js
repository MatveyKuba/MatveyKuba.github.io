import { UI_ELEMENTS } from "./UI_ELEMENTS.js";
import {URL, URLtoGet} from "./source.js"
import Cookies from 'js-cookie'


document.addEventListener("DOMContentLoaded", function(){
  UI_ELEMENTS.popUpSignIn.classList.add('open');
})

UI_ELEMENTS.settingsButton.addEventListener('click', function(){
    UI_ELEMENTS.popUp.classList.add('open');
})

UI_ELEMENTS.closeButton.addEventListener('click', function(){
    UI_ELEMENTS.popUp.classList.remove('open');
})

UI_ELEMENTS.popUpCloseEnterCode.addEventListener('click', function(){
  UI_ELEMENTS.popUpEnterCode.classList.remove('open');
})

UI_ELEMENTS.sendMessage.addEventListener('click', createMessage)

UI_ELEMENTS.popUpCloseSignIn.addEventListener('click', function(){
  UI_ELEMENTS.popUpSignIn.classList.remove('open');
})

UI_ELEMENTS.enterButton.addEventListener('click', function(){
  confirm();
  UI_ELEMENTS.popUpEnterCode.classList.remove('open');
  getName();
  UI_ELEMENTS.popUp.classList.add('open');
  renderMessages();
})

UI_ELEMENTS.changeName.addEventListener('click', function(){
  setName();
  UI_ELEMENTS.popUp.classList.remove('open');
})

UI_ELEMENTS.alreadyGetCode.addEventListener('click', function(){
  UI_ELEMENTS.popUpSignIn.classList.remove('open');
  UI_ELEMENTS.popUpEnterCode.classList.add('open');
})

function createMessage(e){
    e.preventDefault();
    let elem = document.createElement('div');
    elem.append(tmpl.content.cloneNode(true));
    elem.className = "Mes";
    if (UI_ELEMENTS.message.value === ""){
        alert('Here must be message')
    }
    elem.textContent = `${UI_ELEMENTS.nameInput.value}: ${UI_ELEMENTS.message.value}`;
    UI_ELEMENTS.chatMessages.append(elem);
}


function confirm(){
  let code = UI_ELEMENTS.codeInput.value;
  Cookies.set('token', code);
}

UI_ELEMENTS.getCode.addEventListener('click', async function(){
  UI_ELEMENTS.popUpEnterCode.classList.add('open');
  UI_ELEMENTS.popUpSignIn.classList.remove('open');
    getCode();
})


async function getCode(){
  await fetch( URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({ email: `${UI_ELEMENTS.emailInput.value}`})
  }
)}


async function setName(){
    let user = {
      name : null,
    }
    user.name = UI_ELEMENTS.nameInput.value;

    try{
      const response = await fetch(URL, {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${Cookies.get('token')}`,
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(user),
        
    }
    )
        let result = response.json();
        console.log(result);

    }
   catch (err){
      alert(err);
   }

}


async function getName(){
  let res = await fetch(URLtoGet, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${Cookies.get('token')}`,
    }
  })
  let result2 = res.json();
  console.log(result2)
}

document.addEventListener('DOMContentLoaded', function(){
  getMessages();

})

async function getMessages(){
    const response = await fetch(`https://edu.strada.one/api/messages/` , {
      method: 'GET',
        headers: {
          'Authorization': `Bearer ${Cookies.get('token')}`,
        }
    })
    return await response.json();
}

async function renderMessages(){
  const { messages } = await getMessages();
  console.log(messages);
  for (let i=0; i < messages.length; i++){
    let elem = document.createElement('div');
    elem.append(tmpl.content.cloneNode(true));
    elem.className = "Mes2";
    elem.textContent = `${messages[i].user.name}: ${messages[i].text}`;
    UI_ELEMENTS.chatMessages.append(elem);
  }
}

const socket = new WebSocket(`ws://edu.strada.one/websockets?${Cookies.get('token')}`);

// socket.send(JSON.stringify({ text: `тестовый тест` }));