const Repair = require('../models/Repair');
const Device = require('../models/Device');
const Department = require('../models/Department');

exports.listRepairs = async (req, res) => {
    const repairs = await Repair.find().populate('device').populate('department');
    res.render('repairs/list', { repairs });
};

exports.showAddForm = async (req, res) => {
    const devices = await Device.find();
    const departments = await Department.find();
    res.render('repairs/add', { devices, departments });
};

exports.addRepair = async (req, res) => {
    const { device, issue, receivedDate, department } = req.body;
    await Repair.create({ device, issue, receivedDate, department });
    res.redirect('/repairs');
};

exports.showEditForm = async (req, res) => {
    const repair = await Repair.findById(req.params.id).populate('device').populate('department');
    res.render('repairs/edit', { repair });
};

exports.updateRepair = async (req, res) => {
    const { status, completedDate } = req.body;
    await Repair.findByIdAndUpdate(req.params.id, { status, completedDate });
    res.redirect('/repairs');
};

exports.pendingRepairs = async (req, res) => {
    const pending = await Repair.find({ status: { $ne: 'Completed' } }).populate('device').populate('department');
    res.render('repairs/pending', { pending });
};

exports.searchForm = async (req, res) => {
    res.render('repairs/search');
};

exports.searchResults = async (req, res) => {
    const { keyword } = req.body;
    const repairs = await Repair.find({ issue: { $regex: keyword, $options: 'i' } }).populate('device').populate('department');
    res.render('repairs/list', { repairs });
};
