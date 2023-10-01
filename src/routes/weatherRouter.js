const router = require('express').Router();
const { weatherController } = require('../controllers')
const auth = require('../middleware/auth')

router.get('/national', auth, weatherController.getNational);
router.get('/:province', auth, weatherController.getByProvince);
router.get('/:province/:city', auth, weatherController.getByCity);

module.exports = router;
