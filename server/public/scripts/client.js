$(document).ready(handleReady);

let totalCount = 0;

function handleReady() {
  console.log("jquery is loaded!")

  $('#submitBtn').on('click', onGuessSubmit);
  $('#submitBtn').on('click', onGetWinner);
  $('#restartBtn').on('click', onRestart);
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

  totalCount++;  
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
      if (response[response.length - 1].guessMessageA === 'Winner!' || response[response.length - 1].guessMessageB === 'Winner!') 
      { showRestart(); 
        if (response[response.length - 1].guessMessageA === 'Winner!') {
          showPlayerAWinner();
        } else { showPlayerBWinner();}
      };

    })

    .catch((err) => {
      console.log('GET Winner error', err);
    })

}

function showRestart() {
  $('#restartBtn').removeClass('disabled');
}

function onRestart() {
  $.ajax({
    url: '/restart',
    method: 'GET'
  })
    .then(response => {
      console.log('in restart');
    })
    .catch((err) => {
      console.log('onRestart error', err);
    })

  totalCount = 0;
  }

  function render() {
    
  }

