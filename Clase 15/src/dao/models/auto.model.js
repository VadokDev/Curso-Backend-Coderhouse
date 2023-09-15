import mongoose from 'mongoose';

const autoCollection = 'autos';

const autoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const autoModel = mongoose.model(autoCollection, autoSchema);
export { autoModel };
