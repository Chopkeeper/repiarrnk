const Device = require('../models/Device');
const Department = require('../models/Department');

exports.listDevices = async (req, res) => {
    const devices = await Device.find().populate('department');
    res.render('devices/list', { devices });
};

exports.showAddForm = async (req, res) => {
    const departments = await Department.find();
    res.render('devices/add', { departments });
};

exports.addDevice = async (req, res) => {
    const { name, serialNumber, department, location } = req.body;
    await Device.create({ name, serialNumber, department, location });
    res.redirect('/devices');
};
