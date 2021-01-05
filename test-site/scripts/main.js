/*const myHeading = document.querySelector('h1'); 
myHeading.textContent = 'Hello word!'; */
document.querySelector('html').onclick = function() {
    alert('É melhor ficar e lutar. Se você correr, você só vai morrer cansado.!!');
}

let myImage = document.querySelector('img'); /*Troca de imagens */

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Bjorn.jpg') {
      myImage.setAttribute('src','images/Bjorn.jpg');
    } else {
      myImage.setAttribute('src','images/Bjorn.jpg');
    }
}
// Código de mensagem de boas-vindas personalizado
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt ('Por favor, insira seu nome.');
    if(!myName) {
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = `SKOL, ${myName}`;
    }
}
if(!localStorage.getItem('name')) {
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'SKOL ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}
