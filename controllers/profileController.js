const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.showChangeForm = (req, res) => {
    res.render('profile/changepassword');
};

exports.changePassword = async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    const user = await User.findById(req.session.user.id);
    if (!await bcrypt.compare(oldPassword, user.password)) {
        return res.render('profile/changepassword', { error: 'รหัสผ่านเดิมไม่ถูกต้อง' });
    }
    const hashed = await bcrypt.hash(newPassword, 10);
    user.password = hashed;
    await user.save();
    res.render('profile/changepassword', { success: 'เปลี่ยนรหัสผ่านเรียบร้อยแล้ว' });
};
