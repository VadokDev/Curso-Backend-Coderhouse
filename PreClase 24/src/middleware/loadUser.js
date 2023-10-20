import { userModel } from '../dao/models/user.model.js';

const loadUser = async (req, res, next) => {
  const { userId } = req.user;
  const user = await userModel.findById(userId).populate('cart').lean();
  req.user = user;
  next();
};

export default loadUser;
