$(document).ready(handleReady);


function handleReady() {
  console.log("jquery is loaded!")

  $('#submitBtn').on('click', onGuessSubmit);
  $('#submitBtn').on('click', onGetWinner);

}

function onGuessSubmit(evt) {
  evt.preventDefault();

  let playerNumbers = {
    playerAGuess: $('#playerA').val(),
    guessMessageA: '',
    playerBGuess: $('#playerB').val(),
    guessMessageB: ''
  }
  console.log('in onGuessSubmit', playerNumbers);

  $.ajax({
    url: '/guess',
    method: 'POST',
    data: playerNumbers
  })
    .then(response => {
      console.log('POST guesses', response);
    })

    .catch((err) => {
      console.log('POST /guess error', err);

    })
}

function onGetWinner(evt) {
  evt.preventDefault();

  console.log('in onGetWinner');

  $.ajax({
    url: '/guess',
    method: 'GET'
  })
    .then(response => {
      console.log('GET Winner', response);
      
    })

    .catch((err) => {
      console.log('GET Winner error', err);n
    })
}