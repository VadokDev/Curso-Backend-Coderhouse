import express from 'express';
import handlebars from 'express-handlebars';
import cookieParser from 'cookie-parser';

const app = express();

app.engine('handlebars', handlebars.engine());
app.set('views', './src/views');
app.set('view engine', 'handlebars');

app.use('/', express.static('./src/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());

app.listen(8080, () => console.log('tuki'));

app.get('/', (req, res) => {
  res.render('cookies');
});

app.get('/getCookies', (req, res) => {
  res.send(req.cookies);
});

app.post('/setCookies', (req, res) => {
  const { nombre, valor } = req.body;
  res.cookie(nombre, valor, { maxAge: 1000 * 10 }).send('Cookie creada');
});
