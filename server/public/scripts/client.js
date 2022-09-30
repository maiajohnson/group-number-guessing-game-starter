$(document).ready(handleReady);

let guessList = [];


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
      guessList = response;
      render();
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
      guessList = response;
      render();
    })
    .catch((err) => {
      console.log('onRestart error', err);
    })


  }

  function render() {
    $('#winnerTable').empty();
   
    for (let i=0; i < guessList.length; i++) {
    $('#winnerTable').append(`
      <tr>
        <td>${i+1}</td>
        <td>${guessList[i].playerAGuess}, ${guessList[i].guessMessageA}</td>
        <td>${guessList[i].playerBGuess}, ${guessList[i].guessMessageB}</td>
      </tr>
    `)
   }
  }

function showPlayerAWinner() {
  $('#winnerTag').text('Player A is the Winner!');
}

function showPlayerBWinner() {
  $('#winnerTag').text('Player B is the Winner!');
}
