const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.listen(1245, (err) => {
  if (err) {
    console.log(err);
  }
});
