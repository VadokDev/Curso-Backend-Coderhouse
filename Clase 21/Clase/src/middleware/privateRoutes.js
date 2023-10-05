const privateRoutes = (req, res, next) => {
  if (!req.session.isLogged) {
    return res.redirect('/login');
  }

  next();
};

export default privateRoutes;
