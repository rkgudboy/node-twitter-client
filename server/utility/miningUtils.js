const config = require('../../config.json');

/**
 * Check retweet_count key in tweetObject to find out if tweet has been retweeted
 * @param {object} tweetObject
 * @returns {Boolean}
 */
const minRetweetCount = config.min_retweet_count_value - 1;
function isRetweeted(tweetObject) {
  let retweetFlag = false;
  if (tweetObject.retweet_count > minRetweetCount) {
    retweetFlag = true;
  }
  return retweetFlag;
}

module.exports = {
  isRetweeted
 };
