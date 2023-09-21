import mongoose from 'mongoose';
import orderModel from './models/orders.model.js';
import express from 'express';
import handlebars from 'express-handlebars';
import viewsRouter from './routes/views.router.js';

mongoose.connect(
  'mongodb+srv://gonzalofdez06:coderhouse123@cluster0.gwswo1q.mongodb.net/?retryWrites=true&w=majority'
);

const app = express();
app.listen(8080, () => console.log("tuki"))

app.use(express.urlencoded({ extended: true }));
app.engine('handlebars', handlebars.engine());
app.set('views', './src/views');
app.set('view engine', 'handlebars');

app.use('/', viewsRouter);

const environment = async () => {
  await mongoose.connect(
    'mongodb+srv://gonzalofdez06:coderhouse123@cluster0.gwswo1q.mongodb.net/?retryWrites=true&w=majority'
  );

  const result = await orderModel.aggregate([
    {
      $match: { size: 'medium' },
    },
    {
      $group: { _id: '$name', totalQuantity: { $sum: '$quantity' } },
    },
    {
      $sort: { totalQuantity: 1 },
    },
    {
      $group: { _id: 1, orders: { $push: '$$ROOT' } },
    },
    {
      $project: { _id: 0, orders: '$orders' },
    },
    {
      $merge: { into: 'reports' },
    },
  ]);

  console.log(JSON.stringify(result));
};
