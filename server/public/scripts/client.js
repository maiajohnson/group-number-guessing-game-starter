$(document).ready(handleReady);

let guessList = [];

function handleReady() {
  console.log("jquery is loaded!")

  $('#submitBtn').on('click', onGuessSubmit);
}

function onGuessSubmit(evt) {
  evt.preventDefault();

  let playerNumbers = {
    playerAGuess: $('#playerA').val(),
    playerBGuess: $('#playerB').val()
  }
  console.log('in onGuessSubmit', playerNumbers);
}