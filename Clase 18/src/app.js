import express from 'express';
import handlebars from 'express-handlebars';
import cookieParser from 'cookie-parser';
import session from 'express-session';

const app = express();

app.engine('handlebars', handlebars.engine());
app.set('views', './src/views');
app.set('view engine', 'handlebars');

app.use('/', express.static('./src/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());
app.use(
  session({
    secret: 'Jacint0',
    resave: true,
    saveUninitialized: true,
  })
);

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

app.get('/root', (req, res) => {
  if (req.session?.nombre) {
    const counter = req.session.counter;
    req.session.counter = req.session.counter + 1;
    res.send(`Hola ${req.session.nombre}, visitaste el sitio ${counter} veces`);
  } else {
    const nombre = req.query.nombre;
    req.session.nombre = nombre;
    req.session.counter = 1;
    res.send(`Te damos la bienvenida`);
  }
});
