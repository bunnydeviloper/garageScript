// Create a file that has all the users on the computer that is not you (use fs.readdir, fs.writeFile)

const fs = require('fs');

let nameString = ''; //create global variable b/c need to access it outside of function as well

const excludeMyName = (name) => {
  if (name !== "sophiaaa") {
  nameString = nameString + " " + name + "\n";
  }
};
const allNames = (err, files) => {
  files.forEach(excludeMyName);
  fs.writeFile('/home/sophiaaa/garageScript/readdir_writeFile/writeFile.txt', nameString, (err) => {});
}
fs.readdir('/home', allNames);
