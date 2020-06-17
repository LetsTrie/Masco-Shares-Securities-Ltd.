const router = require('express').Router();

router.get('/', (req, res) => res.json({ success: true }));
router.use('/cse', require('./server/cse/cse.route'));
router.use('/services', require('./server/services/services.route'));

module.exports = router;
