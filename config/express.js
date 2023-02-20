const express    = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const config     = require('config');

module.exports = () => {
  const app = express();
  const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
  }

  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', process.env.PORT || config.get('server.port'));

  // MIDDLEWARES
  app.use(bodyParser.json());

  app.use(cors(corsOptions));

  require('../api/routes/avaliacao')(app);

  return app;
};