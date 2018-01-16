const fs = require('fs');
const express = require('express');
const app = express();
app.listen(3147);
app.use(express.static('pp'));
app.get('/files', (req, res) => {
fs.readdir('/home', (err, array) => {
  const index = array.indexOf('sophiaaa');
  array.splice(index, 1);
  console.log('this is all files', array)
  res.json(array);
})
})
