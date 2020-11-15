const express = require('express');
const { getCurrentCount } = require('../controllers/youtube');
const router = express.Router();

router.get('/current-subscribers-count', function(req, res, next) {
  res.send({count: getCurrentCount()});
});

module.exports = router;
