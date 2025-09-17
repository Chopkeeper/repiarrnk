﻿const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const { ensureAuthenticated } = require('../middleware/auth');

router.get('/', ensureAuthenticated, dashboardController.showDashboard);
router.post('/filter', ensureAuthenticated, dashboardController.filterDashboard);

module.exports = router;
