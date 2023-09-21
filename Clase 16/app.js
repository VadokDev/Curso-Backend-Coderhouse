import mongoose from 'mongoose';

mongoose.connect(
  'mongodb+srv://gonzalofdez06:coderhouse123@cluster0.gwswo1q.mongodb.net/?retryWrites=true&w=majority'
);

const usuariosCollection = 'usuarios';
const usuariosSchema = new mongoose.Schema({
  first_name: {
    type: String,
    index: true,
  },
  last_name: {
    type: String,
    index: true,
  },
  email: String,
  gender: String,
});

const usuariosModel = mongoose.model(usuariosCollection, usuariosSchema);

usuariosModel
  .find({ first_name: 'Celia', last_name: 'Garrido' })
  .explain('executionStats')
  .then((response) => console.log(response));
