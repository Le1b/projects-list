const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

const server = app.listen(5000, () => {
  console.log('[Server API] Server started on port ', server.address().port);
});