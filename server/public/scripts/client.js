$(document).ready(handleReady);


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