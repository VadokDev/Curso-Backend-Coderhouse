import mongoose from 'mongoose';

const userCollection = 'users';

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const userModel = mongoose.model(userCollection, userSchema);

export { userModel };
