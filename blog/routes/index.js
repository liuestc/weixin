module.exports = function (app) {
  app.get('/', function (req, res) {
    res.redirect('/posts');
  });
  // 当访问localhost:3000/时  重定向到posts
  app.use('/signup', require('./signup'));
  app.use('/signin', require('./signin'));
  app.use('/signout', require('./signout'));
  app.use('/posts', require('./posts'));
};
