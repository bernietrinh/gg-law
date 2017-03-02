const router = require('express').Router();

module.exports = () => {

  router.get('/version', (req, res) => res.json(require('../package.json').version));
  return router;

};