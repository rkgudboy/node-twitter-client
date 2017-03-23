const tweetController = require('./controllers/tweetController');
module.exports = (app, config) => {
  app.get('/', tweetController.displayTweets);

  app.all('*', (req, res) => {
    res.status(404).render('404');
  });
}
