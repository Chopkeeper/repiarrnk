const Log = require('../models/Log');

exports.record = async (req, action, target) => {
    if (!req.session.user) return;
    await Log.create({
        userId: req.session.user.id,
        action,
        target
    });
};
