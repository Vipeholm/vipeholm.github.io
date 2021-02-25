//Byta bild
let myImage = document.querySelector('img');

myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/bio_logo.jpeg') {
    myImage.setAttribute('src' , 'images/bio_logo2.jpeg')
  } else {
    myImage.setAttribute('src' , 'images/bio_logo.jpeg')
  }
}

// Välkomst dioalog
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName() {
  let myName = prompt('Ange ditt namn');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Bio är coolt, ' + myName;
}


if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Bio är coolt, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
