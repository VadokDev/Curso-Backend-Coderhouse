import express from 'express';
import handlebars from 'express-handlebars';
import viewRouter from './routes/viewRouter.js';
import userRouter from './routes/userRouter.js';

const app = express();

app.engine('handlebars', handlebars.engine());
app.set('views', './src/views');
app.set('view engine', 'handlebars');

app.use(express.static('./public'));

app.get('/', (req, res) => {
  const db = [
    {
      name: 'Jacinto',
      lastname: 'Hernández',
      age: 25,
      email: 'jacinto@hernandez.com',
      phone: '+56912345678',
    },
    {
      name: 'Eustaquio',
      lastname: 'Fernandez',
      age: 25,
      email: 'Eustaquio@hernandez.com',
      phone: '+56912345678',
    },
    {
      name: 'Eleusterio',
      lastname: 'Longevo',
      age: 25,
      email: 'Eleusterio@hernandez.com',
      phone: '+56912345678',
    },
    {
      name: 'Hilda',
      lastname: 'Sánchez',
      age: 25,
      email: 'Hilda@hernandez.com',
      phone: '+56912345678',
    },
    {
      name: 'Kroudon',
      lastname: 'Casas',
      age: 25,
      email: 'Kroudon@hernandez.com',
      phone: '+56912345678',
    },
  ];

  const randomNumber = Math.floor(Math.random() * db.length);

  res.render('user', db[randomNumber]);
});

app.get('/users/:userId', (req, res) => {
  const db = [
    {
      name: 'Jacinto',
      lastname: 'Hernández',
      title: 'Jacinto',
    },
    {
      name: 'Eleusterio',
      lastname: 'Hernández',
      title: 'Eleusterio',
    },
    {
      name: 'Eustaquio',
      lastname: 'Hernández',
      title: 'Eustaquio',
    },
  ];

  res.render('user', db[req.params.userId]);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', viewRouter);
app.use('/user', userRouter);
app.listen(8080, () => console.log('tuki'));
