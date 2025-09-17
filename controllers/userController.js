const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.listUsers = async (req, res) => {
    const users = await User.find();
    res.render('users/list', { users });
};

exports.showAddForm = (req, res) => {
    res.render('users/add');
};

exports.addUser = async (req, res) => {
    const { username, password, role } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    await User.create({ username, password: hashed, role });
    res.redirect('/users');
};

exports.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.redirect('/users');
};

exports.changeRole = async (req, res) => {
    const { role } = req.body;
    await User.findByIdAndUpdate(req.params.id, { role });
    res.redirect('/users');
};

exports.showResetForm = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.render('users/reset', { user });
};

exports.resetPassword = async (req, res) => {
    const { newPassword } = req.body;
    const hashed = await bcrypt.hash(newPassword, 10);
    await User.findByIdAndUpdate(req.params.id, { password: hashed });
    res.redirect('/users');
};
