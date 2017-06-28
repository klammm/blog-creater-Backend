'use strict';

const express = require('express');
const app = express();
var port = process.env.PORT || 3500;

app.use((req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log('Listening on port ', port);
})
