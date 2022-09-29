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

// app.get(
  
//   function randomNumberGenerator() {
//   return Math.floor(Math.random() * (24) + 1);


// });


app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
