'use strict';

//global variables
var playerArray = [];
var cardArray = [];
var playerForm = document.getElementById('playerForm');

//creating card objects using Card constructor
new Card('card1', 'Who is most likely to stub toe?');
new Card('card2', 'Who is most likely to sleep with a teddy bear?');

//constructors

function Card (name, content) {
  this.name = name;
  this.content = content;

  cardArray.push(this);
}

function getPlayerNamesFromLocalStorage() {
  var playerArrayRetrieved = localStorage.getItem('playerArray');
  playerArray = JSON.parse(playerArrayRetrieved);
}

getPlayerNamesFromLocalStorage();

// adding players names to the voting list

function votingListForPlayers() {
  var labels = document.getElementsByClassName('player');
  for (var i = 0; i < playerArray.length; i++) {
    labels[i].textContent = playerArray[i].name;
  }
}
votingListForPlayers();
function render(){
  var cardContainer = document.getElementById('cardContainer');
  var pEl = document.createElement('p');
  pEl.textContent = cardArray['randwhendone'].content; //need insert rng function
  cardContainer.appendChild(pEl);
}

// random number generator
function generateRandom() {
  return Math.floor(Math.random() * cardArray.length);
}
