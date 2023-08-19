const express = require('express');
const AutosManager = require('./AutosManager.js');
const autosManager = new AutosManager();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/autos', async (req, res) => {
  const limit = req.query.limit;
  const autos = await autosManager.getAutos();

  if (limit) {
    return res.send(autos.slice(0, limit));
  }

  res.send(autos);
});

app.get('/autos/:autoId', async (req, res) => {
  const autoId = parseInt(req.params.autoId, 10);
  const autos = await autosManager.getAutos();

  const auto = autos.find(({ id }) => id === autoId);
  if (auto === undefined) {
    return res.status(404).send();
  }

  res.send(auto);
});

app.listen(8080, () => console.log('tuki'));
