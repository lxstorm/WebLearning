var myImage = document.querySelector('img');

myImage.onclick = function(){
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/diablo.jpg'){
    myImage.setAttribute('src','images/diabloloading.jpg');
  }else {
    myImage.setAttribute('src','images/diablo.jpg');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to DiabloIII, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to DiabloIII, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
