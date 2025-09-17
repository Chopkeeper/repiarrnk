const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/departmentController');
const { ensureAuthenticated } = require('../middleware/auth');

router.get('/', ensureAuthenticated, departmentController.listDepartments);
router.get('/add', ensureAuthenticated, departmentController.showAddForm);
router.post('/add', ensureAuthenticated, departmentController.addDepartment);

module.exports = router;
