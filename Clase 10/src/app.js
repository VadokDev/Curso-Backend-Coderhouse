import express from 'express';
import handlebars from 'express-handlebars';

const app = express();

app.engine('handlebars', handlebars.engine());
app.set('views', './src/views');
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  const db = [
    {
      name: 'Jacinto',
      lastName: 'Hernández',
      age: 25,
      email: 'jacinto@hernandez.com',
      phone: '+56912345678',
    },
    {
      name: 'Eustaquio',
      lastName: 'Fernandez',
      age: 25,
      email: 'Eustaquio@hernandez.com',
      phone: '+56912345678',
    },
    {
      name: 'Eleusterio',
      lastName: 'Longevo',
      age: 25,
      email: 'Eleusterio@hernandez.com',
      phone: '+56912345678',
    },
    {
      name: 'Hilda',
      lastName: 'Sánchez',
      age: 25,
      email: 'Hilda@hernandez.com',
      phone: '+56912345678',
    },
    {
      name: 'Kroudon',
      lastName: 'Casas',
      age: 25,
      email: 'Kroudon@hernandez.com',
      phone: '+56912345678',
    },
  ];

  const randomNumber = Math.floor(Math.random() * db.length);

  res.render('user', db[randomNumber]);
});

app.get('/user/:userId', (req, res) => {
  const db = [
    {
      name: 'Jacinto',
      lastName: 'Hernández',
      title: 'Jacinto',
    },
    {
      name: 'Eleusterio',
      lastName: 'Hernández',
      title: 'Eleusterio',
    },
    {
      name: 'Eustaquio',
      lastName: 'Hernández',
      title: 'Eustaquio',
    },
  ];

  res.render('user', db[req.params.userId]);
});

app.listen(8080, () => console.log('tuki'));
