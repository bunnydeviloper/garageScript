const express = require('express');
const app = express();
const PORT = process.env.PORT || 3182;
app.use(express.static('public'));
app.listen(PORT, () => {
  console.log('listening on port ', PORT);
});
