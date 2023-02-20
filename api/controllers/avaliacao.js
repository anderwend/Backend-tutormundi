module.exports = () => {
    const avaliacaoDB = require('../data/avaliacao.json');
    const controller = {};
  
    controller.listavaliacao = (req, res) => res.status(200).json(avaliacaoDB);
  
    return controller;
  }