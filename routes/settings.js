const express = require('express');
const router = express.Router();
const settingController = require('../controllers/settingController');
const { ensureAdmin } = require('../middleware/auth');

router.get('/', ensureAdmin, settingController.listSettings);
router.post('/update', ensureAdmin, settingController.updateSettings);

module.exports = router;
