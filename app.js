const express = require('express');
const app = express();
const handle = (request, response) => { 
                //req, res 
  console.log("Print to terminal");
  // response.send("Send response to browser");
  response.send("2" + "3");
}
//app.use(express.static('public'));
app.listen(3138);
app.get('/', handle);

