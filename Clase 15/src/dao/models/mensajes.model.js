import mongoose from 'mongoose';

const mensajeCollection = 'mensajes';

const mensajeSchema = new mongoose.Schema({
  correo: {
    type: String,
    required: true,
  },
  mensaje: {
    type: String,
    required: true,
  },
});

const mensajeModel = mongoose.model(mensajeCollection, mensajeSchema);
export { mensajeModel };
