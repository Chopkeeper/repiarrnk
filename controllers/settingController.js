const Setting = require('../models/Setting');

exports.listSettings = async (req, res) => {
    const settings = await Setting.find();
    res.render('settings/list', { settings });
};

exports.updateSettings = async (req, res) => {
    const updates = req.body;
    for (const key in updates) {
        await Setting.findOneAndUpdate({ key }, { value: updates[key] }, { upsert: true });
    }
    res.redirect('/settings');
};
