const router = require('express').Router();

const cse = require('./cse.controller');

router.get('/topFiveMovers', cse.topfiveMovers);
router.get('/topFiveGainers', cse.topFiveGainers);
router.get('/topFiveLosers', cse.topFiveLosers);
router.get('/marketComparison', cse.marketComparison);

module.exports = router;
