const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.showLoginForm = (req, res) => {
    res.render('auth/login');
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !await bcrypt.compare(password, user.password)) {
        return res.render('auth/login', { error: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง' });
    }
    req.session.user = { id: user._id, role: user.role };
    res.redirect('/');
};

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/auth/login');
};
