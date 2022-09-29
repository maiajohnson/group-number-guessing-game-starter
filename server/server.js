const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;
let randomNumber = 1;
let guessList = [];


// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here
app.post('/guess', (req, res) => {
  let newGuesses = req.body;
  console.log('player guesses', newGuesses);

  guessList.push(newGuesses);
  console.log('the guess list is now:', guessList);
 
  res.sendStatus(201);
});

app.get('/guess', (req, res) => {
  console.log('in GET thing')

  compareGuess();
  console.log('GET guessMessage', guessList);
  res.send(guessList);
});

app.get('/restart', (req, res) => {
  console.log('in restart');
  randomNumber = randomNumberGenerator();
  guessList = [];
  console.log(guessList);
  console.log('random', randomNumber);
});



app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})

  function compareGuess() {
  

  if (guessList[guessList.length-1].playerAGuess < randomNumber) {
    guessList[guessList.length-1].guessMessageA = "Too low";
  } else if (guessList[guessList.length-1].playerAGuess > randomNumber) {
    guessList[guessList.length-1].guessMessageA = "Too High";
  } else {guessList[guessList.length-1].guessMessageA = "Winner!"};

  if (guessList[guessList.length-1].playerBGuess < randomNumber) {
    guessList[guessList.length-1].guessMessageB = "Too low";
  } else if (guessList[guessList.length-1].playerBGuess > randomNumber) {
    guessList[guessList.length-1].guessMessageB = "Too High";
  } else {guessList[guessList.length-1].guessMessageB = "Winner!"};

} 

  function randomNumberGenerator() {
  return Math.floor(Math.random() * (24) + 1);
  }