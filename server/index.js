const express = require('express');
const config = require('../config.json');
const miningUtils = require('./utility/miningUtils');
const routes = require('./routes');

const app = express();

app.use(express.static('./dist/public'));

app.set('views', 'server/views/');
app.set('view engine', 'pug');

app.use((req, res, next) => {
  const response = res;
  const reqCopy = req;
  response.locals.miningUtils = miningUtils;
  next();
});

routes(app, config);

app.listen(config.port, () => {
  console.log(`NodeJS app initialised on Port:${config.port}`);
})


