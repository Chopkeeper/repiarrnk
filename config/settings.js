const Setting = require('../models/Setting');
const settingsCache = {};

exports.loadSettings = async () => {
    const settings = await Setting.find();
    settings.forEach(s => {
        settingsCache[s.key] = s.value;
    });
};

exports.get = (key) => settingsCache[key];
