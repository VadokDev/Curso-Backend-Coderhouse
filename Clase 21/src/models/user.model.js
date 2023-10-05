import mongoose from 'mongoose';

const userCollection = 'personas';

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  age: Number,
  password: String,
});

const userModel = mongoose.model(userCollection, userSchema);

export { userModel };
