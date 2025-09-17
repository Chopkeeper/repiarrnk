const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { ensureAdmin } = require('../middleware/auth');

router.get('/', ensureAdmin, userController.listUsers);
router.get('/add', ensureAdmin, userController.showAddForm);
router.post('/add', ensureAdmin, userController.addUser);
router.post('/:id/delete', ensureAdmin, userController.deleteUser);
router.post('/:id/role', ensureAdmin, userController.changeRole);
router.get('/:id/reset', ensureAdmin, userController.showResetForm);
router.post('/:id/reset', ensureAdmin, userController.resetPassword);

module.exports = router;
