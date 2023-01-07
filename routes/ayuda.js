var express = require('express');
var router = express.Router();

/* Get de la pagina ayuda. */
router.get('/', function(req, res, next) {
    res.render('ayuda.ejs');
  });

  module.exports = router;