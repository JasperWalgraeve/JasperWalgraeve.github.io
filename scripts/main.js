function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Retro-zons-ondergang.jpg'){
        myImage.setAttribute('src','images/Earth.jpg')
    } else {
        myImage.setAttribute('src','images/Retro-zons-ondergang.jpg')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem('name',myName)
    myHeading.innerHTML = 'Mozilla is cool, ' +myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
}   else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent= 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}