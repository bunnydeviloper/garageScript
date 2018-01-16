const fs = require('fs');
const express = require('express');
const app = express();
app.listen(3168);
app.use(express.static('public'));
const handle = (req, res) => {
  
  res.send('Test: Send message from server file to terminal.');
}
app.get('/', handle)
