const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const { ensureAuthenticated } = require('../middleware/auth');

router.get('/changepassword', ensureAuthenticated, profileController.showChangeForm);
router.post('/changepassword', ensureAuthenticated, profileController.changePassword);

module.exports = router;
