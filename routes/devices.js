const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/deviceController');
const { ensureAuthenticated } = require('../middleware/auth');

router.get('/', ensureAuthenticated, deviceController.listDevices);
router.get('/add', ensureAuthenticated, deviceController.showAddForm);
router.post('/add', ensureAuthenticated, deviceController.addDevice);

module.exports = router;
