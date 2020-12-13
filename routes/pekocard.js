var express = require('express');
var router = express.Router();

router.get('/:pekocardID', function(req, res, next) {
  const pekocardIDSplit = req.params.pekocardID.split('_');
  const imgurID = pekocardIDSplit[pekocardIDSplit.length - 1];
  const redirectURL = process.env.CLIENT_URL + '/pekoCard/'  + req.params.pekocardID;
  res.render('pekocard', {imgur: imgurID, redirectURL: redirectURL});
});

module.exports = router;