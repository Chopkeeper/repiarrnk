const LoginLog = require('../models/LoginLog');

exports.recordLogin = async (req, userId) => {
    await LoginLog.create({
        userId,
        ip: req.ip,
        userAgent: req.headers['user-agent']
    });
};
