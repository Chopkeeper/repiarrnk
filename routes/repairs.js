const express = require('express');
const router = express.Router();
const repairController = require('../controllers/repairController');
const { ensureAuthenticated } = require('../middleware/auth');

router.get('/', ensureAuthenticated, repairController.listRepairs);
router.get('/add', ensureAuthenticated, repairController.showAddForm);
router.post('/add', ensureAuthenticated, repairController.addRepair);
router.get('/:id/edit', ensureAuthenticated, repairController.showEditForm);
router.post('/:id/update', ensureAuthenticated, repairController.updateRepair);
router.get('/pending', ensureAuthenticated, repairController.pendingRepairs);
router.get('/search', ensureAuthenticated, repairController.searchForm);
router.post('/search', ensureAuthenticated, repairController.searchResults);

module.exports = router;
