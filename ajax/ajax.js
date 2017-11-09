const fs = require('fs');
const express = require('express');
const app = express(); 
app.listen(3164);
app.use(express.static('public'));
const handle = (req, res) => {
  console.log(`${req.query.name}`);
  fs.appendFile('/home/sophiaaa/garageScript/ajax/receivedComments.txt',
    `\n Name: ${req.query.name} Comment: ${req.query.comment} \n`);
  res.send("Thank you for submitting your comment.");
}
app.get('/submit', handle);
