//Create a server that displays a list of users on your computer that is not you

const fileSystem = require('fs');
const express = require('express');
const app = express();
app.listen(3138);
<<<<<<< HEAD

const handle = (req, res) => { 
  // req = request, res = response 
  // this is a server file, so you'll see: console.log("Print to terminal");
  // res.send("Send response to browser"); --OR-- res.send("2" + "3");
  // note: whenever writing send function, you can only send once
  
  let nameString = " ";
  const checkMyName = (name) => {
    if (name !== "sophiaaa") {
      nameString = nameString + ' ' + name + '\n';
    }
  }
  const directoryNames = (err, data) => {
    data.forEach(checkMyName);
    res.send(nameString);
  }
  fileSystem.readdir('/home', directoryNames);
};

//app.use(express.static('public'));
app.get('/', handle);



=======

const handle = (req, res) => { 
  // req = request, res = response 
  // this is a server file, so you'll see: console.log("Print to terminal");
  // res.send("Send response to browser"); --OR-- res.send("2" + "3");
  // note: whenever writing send function, you can only send once
  
  let nameString = " ";
  const checkMyName = (name) => {
    if (name !== "sophiaaa") {
      nameString = nameString + ' ' + name + '\n';
    }
  }
  const directoryNames = (err, data) => {
    data.forEach(checkMyName);
    res.send(nameString);
  }
  fileSystem.readdir('/home', directoryNames);
};

//app.use(express.static('public'));
app.get('/', handle);
>>>>>>> 138cdb557e9502d9d0ee40c3eb39f99aa77eab6b
