const errorHandler = async (req, res, next) => {
  try {
    await next();
  } catch (err) {
    console.log(err);
  }
};
