const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;
let randomNumber = 1;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here
app.get('/random', (req, res) => {
  console.log('random number', randomNumber);

  res.send(randomNumber);
});

app.get(
  
  function randomNumberGenerator() {
  return Math.floor(Math.random() * (24) + 1);


});


app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
