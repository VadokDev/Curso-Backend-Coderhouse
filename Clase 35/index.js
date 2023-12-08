import express from 'express';

const app = express();

app.listen(8080, () => console.log("ola"));
app.get('/', (req, res) => res.send("hola"));