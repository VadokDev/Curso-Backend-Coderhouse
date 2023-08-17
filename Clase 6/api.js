const express = require('express');
const moment = require('moment');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send({
    a: moment(),
    b: 6,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
