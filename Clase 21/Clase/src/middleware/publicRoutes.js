const publicRoutes = (req, res, next) => {
  if (req.session.isLogged) {
    return res.redirect('/profile');
  }
  next();
};

export default publicRoutes;
