const twitScraper = require('twit');
const config = require('../../config.json');
const miningUtils = require('../utility/miningUtils');

/**
 * Show webpage with list of tweets following parameters
 * specified in config
 * @param {Request} req
 * @param {Response} res
 */
function displayTweets(req, res) {
  const searchTerm = config.twitter_api_search_term;
  const minRetweetCount = config.min_retweet_count_value;
  const twitInstance = new twitScraper({
    consumer_key:config.twitter_api_consumer_key,
    consumer_secret:config.twitter_api_consumer_secret,
    access_token:config.twitter_api_access_token,
    access_token_secret:config.twitter_api_access_token_secret,
    timeout_ms:config.twitter_api_retry_timeout
  });
  const cb = function(err, data, response) {
    if (err) {
      // render API Error page if some error is encountered.
      res.render('500');
    } else {
      let dataInput = data.statuses;
      let result = [];
      for(let tweet of dataInput){
        if (miningUtils.isRetweeted(tweet)) {
          result.push(tweet);
        }
      }
      return res.render('home', {data:result, searchTerm, minRetweetCount});
    }
  };
  twitInstance.get('search/tweets', { q: searchTerm, count: 100 }, cb);
};

module.exports = {
  displayTweets
};