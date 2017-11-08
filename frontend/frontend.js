const fs = require('fs');
const express = require('express');
const app = express();
app.listen(3162);
app.use(express.static('public'));

const handle = (req, res) => {
  fs.appendFile(
    '/home/sophiaaa/garageScript/frontend/receivedcomment.txt', 
    `${req.query.name}: ${req.query.comment}` + '\n', 
    (err) => {}
  )
  res.send("Your comment has been received!");
}
app.get('/submit', handle);

