const express = require('express');
const app = express();
const handle = (req, res) => { 
  //req = request, res = response 
  console.log("Print to terminal");
  // response.send("Send response to browser");
  // need to commented the above b/c you can only send once
  response.send("2" + "3");
}
//app.use(express.static('public'));
app.listen(3138);
app.get('/', handle);

