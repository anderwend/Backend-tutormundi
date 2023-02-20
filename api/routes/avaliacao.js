
module.exports = app => {
    const controller = require('../controllers/avaliacao')();
  
    app.route('/api/v1/avaliacao')
      .post((req, res) => {
        const { rating } = req.body;
        console.log("O usuario enviou "+rating+" estrelas.");
        return res.json(rating);
      });
  }

  